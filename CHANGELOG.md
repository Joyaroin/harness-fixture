# Changelog

## Unreleased

### Added

- Add `clamp(n, min, max)` to new `src/num.js`, an inclusive numeric clamp that throws `RangeError` when `min > max`.
- `initials(name)` added as a named export of `src/text.js`: splits on runs of whitespace,
  ignores empty pieces, and joins the uppercased first character of each word with no
  separator. `initials("")` returns `""`.
- Add `percent(part, whole)` to `src/num.js`, a whole-number percentage string built on `clamp`; returns `"0%"` when `whole` is `0`.
- `reverseWords(s)` added as a named export of `src/text.js`: splits on runs of whitespace,
  ignores empty pieces, reverses their order, and joins with a single space.
  `reverseWords("")` returns `""`.
- Add `sum(numbers)` to `src/num.js`, returning the total of an array of numbers; `sum([])` returns `0`.
