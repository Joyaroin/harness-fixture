export function titleCase(s) {
  return s.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")
}

export function normalise(s) {
  return s.trim().replace(/\s+/g, " ")
}

export function truncate(s, max) {
  if (s.length <= max) return s
  return s.slice(0, max - 1) + "…"
}

export function slugify(s) {
  return normalise(s)
    .toLowerCase()
    .split(" ")
    .map(w => w.replace(/[^a-z0-9]/g, ""))
    .filter(w => w.length > 0)
    .join("-")
}
