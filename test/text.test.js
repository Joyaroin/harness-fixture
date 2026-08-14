import { test } from "node:test"
import assert from "node:assert/strict"
import { titleCase, truncate, wordCount } from "../src/text.js"

test("titleCase capitalises each word", () => {
  assert.equal(titleCase("hello there"), "Hello There")
})

test("truncate returns the string unchanged when it is exactly n characters", () => {
  assert.equal(truncate("hello", 5), "hello")
})

test("truncate cuts to the first n characters plus a single ellipsis when over the limit", () => {
  assert.equal(truncate("hello there", 5), "hello…")
})

test("truncate returns the string unchanged when n is longer than the string", () => {
  assert.equal(truncate("hi", 10), "hi")
})

test("truncate with n of 0 returns just the ellipsis for a non-empty string", () => {
  assert.equal(truncate("hello", 0), "…")
})

test("wordCount counts runs of non-whitespace characters", () => {
  assert.equal(wordCount("one two three"), 3)
})

test("wordCount treats consecutive whitespace as one separator", () => {
  assert.equal(wordCount("  one \t two\n three  "), 3)
})

test("wordCount returns 0 for an empty string", () => {
  assert.equal(wordCount(""), 0)
})

test("wordCount returns 0 for a whitespace-only string", () => {
  assert.equal(wordCount("   \t\n  "), 0)
})
