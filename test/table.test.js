import { test } from "node:test"
import assert from "node:assert/strict"
import { formatRow } from "../src/table.js"

test("formatRow pads each cell to its column width and joins with a pipe", () => {
  assert.equal(formatRow([1, 22], [3, 3]), "  1 |  22")
})

test("formatRow of empty cells and widths is the empty string", () => {
  assert.equal(formatRow([], []), "")
})

test("formatRow emits no separator for a single-cell row", () => {
  assert.equal(formatRow([5], [3]), "  5")
})
