export function truncate(s, n) {
  return s.length <= n ? s : s.slice(0, n) + "…"
}

export function titleCase(s) {
  return s.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")
}
