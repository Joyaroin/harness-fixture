import { padLeft } from "./text.js"

export function formatRow(cells, widths) {
  return cells.map((cell, i) => padLeft(String(cell), widths[i])).join(" | ")
}
