# Changelog

## Unreleased

### Added

- `wordCount(s)` in `src/text.js` — counts runs of non-whitespace characters; an
  empty or whitespace-only string counts 0. Emits one temporary diagnostic line
  per call for the caller migration (#922); a follow-up ticket removes it. The
  line goes to stderr via `console.error`, because CI forbids `console.log`
  anywhere under `src/`.
- `truncate(s, n)` in `src/text.js` — shortens a string for display, appending a
  single ellipsis only when it actually cut something.
