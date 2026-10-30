# Changelog

## Unreleased

### Added

- `initials(name)` added as a named export of `src/text.js`: splits on runs of whitespace,
  ignores empty pieces, and joins the uppercased first character of each word with no
  separator. `initials("")` returns `""`.
