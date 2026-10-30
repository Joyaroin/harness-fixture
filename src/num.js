export function clamp(n, min, max) {
  if (min > max) {
    throw new RangeError(`min (${min}) must not be greater than max (${max})`)
  }
  if (n < min) return min
  if (n > max) return max
  return n
}

export function percent(part, whole) {
  if (whole === 0) return "0%"
  const rounded = Math.round((part / whole) * 100)
  return `${clamp(rounded, 0, 100)}%`
}

export function sum(numbers) {
  return numbers.reduce((total, n) => total + n, 0)
}

export function mean(numbers) {
  if (numbers.length === 0) {
    throw new RangeError(`numbers (${numbers}) must not be empty`)
  }
  return sum(numbers) / numbers.length
}
