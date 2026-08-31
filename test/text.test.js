import { test } from "node:test"
import assert from "node:assert/strict"
import { normalise, titleCase } from "../src/text.js"

test("titleCase capitalises each word", () => {
  assert.equal(titleCase("hello there"), "Hello There")
})

test("normalise trims surrounding whitespace", () => {
  assert.equal(normalise("  hello there  "), "hello there")
})

test("normalise collapses runs of whitespace to a single space", () => {
  assert.equal(normalise("hello   there\t\tworld\n\nagain"), "hello there world again")
})

test("normalise returns the empty string for the empty string", () => {
  assert.equal(normalise(""), "")
})
