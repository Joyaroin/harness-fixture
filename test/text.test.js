import { test } from "node:test"
import assert from "node:assert/strict"
import { normalise, slugify, titleCase } from "../src/text.js"

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

test("slugify lowercases and joins words with a dash", () => {
  assert.equal(slugify("  Hello   There World "), "hello-there-world")
})

test("slugify returns the empty string unchanged", () => {
  assert.equal(slugify(""), "")
})

test("slugify drops characters that are not letters, digits or separators", () => {
  assert.equal(slugify("Hello, World! -- it's #1"), "hello-world-its-1")
  assert.equal(slugify("!!!"), "")
})
