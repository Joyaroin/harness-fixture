export function titleCase(s) {
  return s.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")
}

export function normalise(s) {
  return s.replace(/\s+/g, " ").trim()
}
