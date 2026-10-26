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

describe("why section", () => {
  it("names the three value streams and the enabling capabilities", () => {
    const text = html().replace(/<[^>]+>/g, "");
    for (const phrase of [
      "teaching",
      "research",
      "transfer",
      "enabling capabilities",
    ]) {
      expect(text).toContain(phrase);
    }
  });

  it("links Public Money, Public Code to its campaign site", () => {
    expect(html()).toMatch(
      /<a[^>]+href="https:\/\/publiccode\.eu\/"[^>]*>\s*Public Money, Public Code\s*<\/a>/,
    );
  });

  it("keeps the spaces around inline links in the built text", () => {
    const text = html().replace(/<[^>]+>/g, "");
    expect(text).toMatch(/principle of “Public Money, Public Code” are/);
  });
});

// Partner logos need each organisation's written consent (see CLAUDE.md).
describe("partner logos", () => {
  it("are not shown", () => {
    const images = [...html().matchAll(/<img[^>]+src="([^"]+)"/g)].map(
      (m) => m[1],
    );
    expect(
      images.every((src) =>
        /^\/(logo\.svg|icon\.png|github-mark-white\.svg)$/.test(src),
      ),
    ).toBe(true);
  });
});

describe("header GitHub button", () => {
  it("is dark and carries the GitHub mark, like on edutap.eu", () => {
    const header = html().match(/<header[\s\S]*?<\/header>/)?.[0] ?? "";
    const button =
      header.match(
        /<a[^>]+href="https:\/\/github\.com\/ictpathfinder"[^>]*>[\s\S]*?<\/a>/,
      )?.[0] ?? "";
    expect(button).toMatch(/class="[^"]*\bbg-black\b/);
    expect(button).toMatch(/<img[^>]+src="\/github-mark-white\.svg"/);
    expect(button).toContain("GitHub");
  });
});
