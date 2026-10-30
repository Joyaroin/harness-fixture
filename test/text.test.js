import { test } from "node:test"
import assert from "node:assert/strict"
import { titleCase, initials, reverseWords } from "../src/text.js"

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
