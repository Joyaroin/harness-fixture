export function titleCase(s) {
  return s.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")
}

export function truncate(s, max) {
  if (s.length <= max) return s
  return s.slice(0, max - 1) + "…"
}
