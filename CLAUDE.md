# CLAUDE.md — website

Rules of this repository. They take precedence over any global defaults.

## Language

English throughout: site content, documentation, commit messages, pull request descriptions
and review replies. Code, identifiers and code comments are English as well. The site
addresses an international higher-education audience (EUNIS, GÉANT and national networks);
a German page would exclude most of it.

## What this repository is

The public website of ICT Pathfinder at `ictpathfinder.org`: a static Astro site deployed to
GitHub Pages. It presents the project; it is not the project's documentation and holds no
product code. Product code lives in `ictpathfinder/ictpathfinder`, requirements and user
stories in `ictpathfinder/requirements-and-user-stories`, the organisation profile and the
brand style guide in `ictpathfinder/.github`.

## Guard Rails

**Everything in this repository is public, and so is everything it renders.** The site is
the project's public face and the repository is meant to be public too. Drafts, internal
notes, partner correspondence and anything under NDA never go into a commit here — a
deleted file stays readable in the history.

**The site must not suggest that EUNIS, GÉANT, the Digitalverbund Bayern or any other
organisation endorses ICT Pathfinder.** The style guide requires this. Naming the context
the project works in is fine; partner logos, "in cooperation with" or "supported by" need
the written consent of that organisation first.

**The brand comes from the style guide in `ictpathfinder/.github`, not from this
repository.** The tokens in `src/styles/global.css` and `public/logo.svg` are copies. A
colour or logo change starts in the style guide and is then carried over here, otherwise
profile, site and future documentation drift apart. The master logo is never recoloured,
stretched or cropped, and the full three-line version is only shown at 640 CSS px or wider;
below that the symbol plus a text name stands in until a compact asset exists.

**No go-live without an imprint and a privacy policy.** A site run from Germany needs a
provider identification under
[§ 5 DDG](https://www.gesetze-im-internet.de/ddg/__5.html) and a privacy notice under the
GDPR. Both name the responsible institution, so they cannot be written here without that
decision. Until they exist, the custom domain stays unannounced.

**Pages configuration lives outside the diff.** Custom domain, HTTPS enforcement and the
"GitHub Actions" source are repository settings; a `CNAME` file is ignored by an Actions
deployment. On the organisation's Free plan Pages only works for public repositories.
Whoever changes these settings records it in the pull request that needs them.

**TypeScript stays on 6.x for now.** Measured on 2026-10-23: `astro check` (0.9.12) refuses
TypeScript 7 and `make lint` fails. Raise it only together with a type-check setup that
supports 7, and check that `make lint` actually type-checks afterwards.

## Sources and confidentiality

**No vendor internals — from any vendor**, not only the ones currently involved. Neither in
files nor in commit messages.

The standard is academic: a statement is reliable only where it can be backed by public
information and a link. Everything else comes from a protected source, from our own tests or
from insider knowledge, and the four are not interchangeable:

- **Sourced** — a public source of reputable origin, linked. May stand as fact.

  Forum posts, mailing lists and Q&A platforms such as Stack Overflow do not count as
  sources. They are leads to follow; the source is then the documentation or the code they
  point to.

- **Sourced, not citable** — obtained by a person from an access-restricted area and checked
  there; the location is recorded internally but may not be published; and the statement is
  reduced to what is not confidential. May stand as fact, with exactly this note. It is the
  journalistic rule of source protection: the statement stands, we know where it comes from,
  the reader does not get the source.

  The conditions apply together. A statement for which nobody can name the internal location
  does not fall under this — that is insider knowledge.

- **Measured** — established by our own tests. May be documented, but always marked as such:
  it describes what a platform did on the day we looked, not what it guarantees. It can
  change with the next release, without announcement and without a changelog entry.
- **Insider knowledge** — is not written down at all.

What a platform behaviour **means for us** remains documentable even where the mechanism is
not: "The platform enforces a deadline, it is self-healing, it is not in our hands" carries
the design consequence without revealing anything.

Citable in this project: publications of EUNIS, GÉANT and the Digitalverbund Bayern that are
publicly available on their websites, and the public documentation of the tools used here
(Astro, Tailwind CSS, GitHub).

## Working method

- Never work on `main`. Create a branch first (`feature/…`, `fix/…`, `chore/…`, `docs/…`).
  Pushing to a branch is fine; pushing to `main` never is. Changes reach `main` only through
  a pull request against `main`.
- Before every push, check that the branch and its pull request are still open. Commits
  pushed to a branch whose pull request was already merged reach `main` by no route at all.
  Follow-up work gets a new branch from `origin/main`.
- Name the target of every write command explicitly: `git -C <path>`,
  `gh -R ictpathfinder/website`. Several repositories sit side by side in the workspace, and
  pull request numbers are per repository.
- Save a pull request's text locally before changing it; nothing versions it.
- Before a pull request: `make lint` and `make test-local` are green. CI runs the same
  targets.
- Conventional Commits. Pull request descriptions contain Summary, Tests and Risks.
- One package manager: pnpm, version pinned in `package.json`. No `package-lock.json`.
- Test first: a behaviour of the built site gets a test in `tests/` that reads `dist/`.
