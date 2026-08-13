import { test } from "node:test"
import assert from "node:assert/strict"
import { titleCase } from "../src/text.js"

test("titleCase capitalises each word", () => {
  assert.equal(titleCase("hello there"), "Hello There")
})
