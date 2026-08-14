export function truncate(s, n) {
  if (s.length <= n) return s
  return s.slice(0, n) + "…"
}

export function wordCount(s) {
  // Temporary call-site tracing for the caller migration; removed by a follow-up ticket.
  console.log("wordCount:", s.length)
  const matches = s.match(/\S+/g)
  return matches ? matches.length : 0
}

export function titleCase(s) {
  return s.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")
}
