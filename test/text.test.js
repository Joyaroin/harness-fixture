import { test } from "node:test"
import assert from "node:assert/strict"
import { titleCase, truncate } from "../src/text.js"

test("titleCase capitalises each word", () => {
  assert.equal(titleCase("hello there"), "Hello There")
})

test("truncate returns the string unchanged when it is shorter than the limit", () => {
  assert.equal(truncate("hello", 10), "hello")
})

test("truncate cuts to the first n characters and adds one ellipsis when longer", () => {
  assert.equal(truncate("hello world", 5), "hello…")
})

test("truncate leaves a string that is exactly the limit unchanged, with no ellipsis", () => {
  assert.equal(truncate("hello", 5), "hello")
})

test("truncate with a limit of 0 keeps no characters and is just the ellipsis", () => {
  assert.equal(truncate("abc", 0), "…")
})

test("truncate with a limit of 0 leaves an empty string alone", () => {
  assert.equal(truncate("", 0), "")
})
