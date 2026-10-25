# CLAUDE.md — website

Rules for this repository. They take precedence over any global configuration.

## Language

Everything in this repository is **English**: content, code, issues, pull requests, commit
messages and review replies — also when the conversation that produced them was held in German.
The brand style guide requires all public brand and interface copy in English.

## What this repository is

The public website of ICT Pathfinder. It is **public**. It presents ICT Pathfinder; it does not plan or decide it —
that happens in the private repositories `requirements-and-user-stories` and `ictpathfinder`.

## Guard Rails

**Nothing from the private repositories is published here until it has been released for publication.**
The requirements, open decisions and pilot data are private on purpose. A public commit is
cloned, cached and indexed immediately; reverting it does not take it back.

**No decision tickets in this repository.** Issues here are readable by anyone. Discussions about
scope, licences or technology belong on the wayfinder map in `ictpathfinder/requirements-and-user-stories`.

**Public copy follows the brand style guide and implies no endorsement.** The style guide is
`Styleguide-ictpathinder.md` in `ictpathfinder/.github`. Naming GÉANT, Digitalverbund Bayern, CAUDIT
or any other organisation must not suggest that they endorse or participate in the project
unless they have agreed to it.

**Every writing `gh` command names its target with `-R ictpathfinder/<repo>`, and stands alone.**
Issue and pull request numbers are per repository. An issue or PR body is not versioned anywhere:
save the current text to a file first, and run the write as a separate command.

## Sources and confidentiality

**No vendor internals — from any vendor**, not only from those currently involved.
Neither in files nor in commit messages, issues or pull requests.

The standard is academic: a statement is reliable only where it can be backed by public
information and a link. Everything else comes from a protected source, from our own tests or
from insider knowledge, and the four are not interchangeable:

- **Sourced** — a public source of reputable origin, linked. May stand as fact.

  Forum posts, mailing lists and Q&A platforms such as Stack Overflow do not count as sources.
  They are leads to follow — the source is then the documentation or the code they point to.
- **Sourced, not citable** — obtained by a person from an access-restricted area and verified
  there; the location is recorded internally but must not be published; and the statement is
  reduced to what is not confidential. May stand as fact, with exactly this note. It is the
  journalistic rule of source protection: the statement stands, we know where it comes from,
  the reader does not get the source.

  All conditions apply together. A statement for which nobody can name the internal location
  does not fall under this — that is insider knowledge.
- **Measured** — established by our own tests. May be documented, but always marked as such:
  it describes what a platform did on the day we looked, not what it guarantees. It can change
  with the next release, without announcement and without a changelog entry.
- **Insider knowledge** — is not written down at all.

What a platform behaviour **means for us** remains documentable even where the mechanism is not:
"the platform enforces a deadline, it is self-healing, it is outside our control" carries the
design consequence without disclosing anything.

## Working practice

- Never work on `main` directly. Create a branch first: `feature/…`, `fix/…`, `chore/…`, `docs/…`.
- Push only to that branch; changes reach `main` exclusively through a pull request, opened with
  `gh pr create -R ictpathfinder/website`. The target branch is `main`.
- Before pushing, check that the branch's pull request is still open. Commits pushed to a branch
  whose pull request has already been merged reach `main` by no route and nothing reports it.
  Follow-up work gets a new branch from `origin/main`.
- Conventional Commits.
- Pull request descriptions contain Summary, Tests (what was checked) and Risks.
