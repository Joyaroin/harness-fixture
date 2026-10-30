# Changelog

## Unreleased

### Added

- Add `clamp(n, min, max)` to new `src/num.js`, an inclusive numeric clamp that throws `RangeError` when `min > max`.
- `initials(name)` added as a named export of `src/text.js`: splits on runs of whitespace,
  ignores empty pieces, and joins the uppercased first character of each word with no
  separator. `initials("")` returns `""`.
