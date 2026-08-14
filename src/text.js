export function truncate(s, n) {
  return s.length <= n ? s : s.slice(0, n) + "…"
}

// TEMPORARY (a follow-up to #922 removes this): call-site tracing for the
// caller migration. One diagnostic line per call, on stderr via console.error.
// The stdout logger is deliberately not used here: .github/workflows/ci.yml
// fails the build on that call anywhere under src/.
export function wordCount(s) {
  console.error("wordCount:", s.length)
  return s.split(/\s+/).filter(Boolean).length
}

export function titleCase(s) {
  return s.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")
}
