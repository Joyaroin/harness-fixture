# Changelog

## Unreleased

- `truncate(s, max)` added as a named export of `src/text.js`: returns the string
  untouched when it already fits within `max` characters, otherwise cuts it to
  exactly `max` characters with a single-character ellipsis `…` as the last one.
