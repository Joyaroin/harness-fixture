import { test } from "node:test"
import assert from "node:assert/strict"
import { normalise, slugify, titleCase, truncate } from "../src/text.js"

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

test("truncate returns the string untouched when it fits", () => {
  assert.equal(truncate("hello", 10), "hello")
})

test("truncate shortens to exactly max characters ending in an ellipsis", () => {
  const result = truncate("hello there", 8)
  assert.equal(result.length, 8)
  assert.equal(result.at(-1), "…")
  assert.equal(result, "hello t…")
})

test("truncate leaves a string of exactly max characters untouched", () => {
  assert.equal(truncate("hello", 5), "hello")
})

test("truncate handles the empty string", () => {
  assert.equal(truncate("", 5), "")
  assert.equal(truncate("", 0), "")
})

test("slugify lowercases and joins words with a hyphen", () => {
  assert.equal(slugify("Hello There World"), "hello-there-world")
})

test("slugify returns the empty string for the empty string", () => {
  assert.equal(slugify(""), "")
})

test("slugify drops characters that are not a letter, a digit or a separator", () => {
  assert.equal(slugify("  Hello,   There!  It's 42% Done  "), "hello-there-its-42-done")
})
