export function titleCase(s) {
  return s.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")
}

export function initials(name) {
  return name
    .split(/\s+/)
    .filter(w => w.length > 0)
    .map(w => w[0].toUpperCase())
    .join("")
}

export function reverseWords(s) {
  return s
    .split(/\s+/)
    .filter(w => w.length > 0)
    .reverse()
    .join(" ")
}

export function padLeft(s, width, ch = " ") {
  if (s.length >= width) {
    return s
  }
  return ch.repeat(width - s.length) + s
}
