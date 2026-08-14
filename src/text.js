export function truncate(s, n) {
  if (s.length <= n) return s
  return s.slice(0, n) + "…"
}

export function titleCase(s) {
  return s.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")
}
