export function clamp(n, min, max) {
  if (min > max) {
    throw new RangeError(`min (${min}) must not be greater than max (${max})`)
  }
  if (n < min) return min
  if (n > max) return max
  return n
}
