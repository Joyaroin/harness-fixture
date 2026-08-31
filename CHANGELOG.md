# Changelog

## Unreleased

### Added

- `normalise(s)` in `src/text.js`: collapses runs of whitespace to a single space and trims both
  ends. The empty string is a supported input and returns the empty string.
- `truncate(s, max)` added as a named export of `src/text.js`: returns the string
  untouched when it already fits within `max` characters, otherwise cuts it to
  exactly `max` characters with a single-character ellipsis `…` as the last one.
- `slugify(s)` added as a named export of `src/text.js`: builds on `normalise` for whitespace
  collapsing and trimming, then lowercases and joins the words with `-`, dropping any character
  that is not an ASCII letter, a digit or a separator. `slugify("")` returns `""`.
