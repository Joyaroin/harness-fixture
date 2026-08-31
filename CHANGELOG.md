# Changelog

## Unreleased

### Added

- `normalise(s)` in `src/text.js`: collapses runs of whitespace to a single space and trims both
  ends. Returns `""` for the empty string. (#4)
- `slugify(s)` in `src/text.js`: builds on `normalise`, lowercases, drops any character that is not
  an ASCII letter, digit or separator, and joins the remaining words with `-`. Returns `""` for the
  empty string. (#6)
