import { test } from "node:test"
import assert from "node:assert/strict"
import { normalise, titleCase } from "../src/text.js"

test("titleCase capitalises each word", () => {
  assert.equal(titleCase("hello there"), "Hello There")
})

test("normalise collapses repeated whitespace and trims", () => {
  assert.equal(normalise("  hello   there  "), "hello there")
})

test("normalise returns the empty string unchanged", () => {
  assert.equal(normalise(""), "")
})

test("normalise collapses every kind of whitespace run to one space", () => {
  assert.equal(normalise("a \t\n  b\r\nc"), "a b c")
  assert.equal(normalise("   "), "")
})
