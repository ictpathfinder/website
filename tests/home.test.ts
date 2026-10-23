import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const html = () => readFileSync("dist/index.html", "utf8");

describe("home page", () => {
  it("shows the master logo with its full wording as alt text", () => {
    expect(html()).toMatch(
      /<img[^>]+src="\/logo\.svg"[^>]+alt="ICT Pathfinder – Architecture, services &amp; automation for Higher Education Institutions and Alliances"/,
    );
  });

  it("carries the slogan from the organisation profile", () => {
    expect(html()).toContain(
      "Architecture, services &amp; automation for higher education.",
    );
  });

  it("has exactly one h1 naming the project", () => {
    const headings = html().match(/<h1[\s>]/g) ?? [];
    expect(headings).toHaveLength(1);
    expect(html()).toMatch(/<h1[^>]*>[\s\S]*ICT Pathfinder[\s\S]*<\/h1>/);
  });

  it("links to the GitHub organisation", () => {
    expect(html()).toContain('href="https://github.com/ictpathfinder"');
  });
});

describe("project context", () => {
  it("names EUNIS, GÉANT and the Digitalverbund Bayern as context", () => {
    for (const name of ["EUNIS", "GÉANT", "Digitalverbund Bayern"]) {
      expect(html()).toContain(name);
    }
  });

  it("keeps the spaces between the linked names", () => {
    const text = html().replace(/<[^>]+>/g, "");
    expect(text).toContain(
      "around EUNIS, GÉANT and the Digitalverbund Bayern.",
    );
  });

  // Partner logos need each organisation's written consent (see CLAUDE.md).
  it("shows no partner logos", () => {
    const images = [...html().matchAll(/<img[^>]+src="([^"]+)"/g)].map(
      (m) => m[1],
    );
    expect(images.every((src) => /^\/(logo\.svg|icon\.png)$/.test(src))).toBe(
      true,
    );
  });
});
