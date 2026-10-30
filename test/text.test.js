import { test } from "node:test"
import assert from "node:assert/strict"
import { titleCase, initials, reverseWords, padLeft } from "../src/text.js"

test("titleCase capitalises each word", () => {
  assert.equal(titleCase("hello there"), "Hello There")
})

test("initials joins the uppercased first letter of each word", () => {
  assert.equal(initials("hello there"), "HT")
})

test("initials ignores repeated whitespace between words", () => {
  assert.equal(initials("hello    there"), "HT")
})

test("initials of the empty string is the empty string", () => {
  assert.equal(initials(""), "")
})

test("reverseWords reverses the order of words in a sentence", () => {
  assert.equal(reverseWords("hello there world"), "world there hello")
})

test("reverseWords collapses repeated and surrounding whitespace", () => {
  assert.equal(reverseWords("  hello    there   world  "), "world there hello")
})

test("reverseWords of the empty string is the empty string", () => {
  assert.equal(reverseWords(""), "")
})

test("padLeft pads a short string with spaces up to width", () => {
  assert.equal(padLeft("7", 3), "  7")
})

test("padLeft pads with a custom character", () => {
  assert.equal(padLeft("7", 3, "0"), "007")
})

test("padLeft returns a string already at width unchanged", () => {
  assert.equal(padLeft("123", 3), "123")
})

test("padLeft returns a string longer than width unchanged", () => {
  assert.equal(padLeft("1234", 3), "1234")
})
