import { test } from "node:test"
import assert from "node:assert/strict"
import { clamp } from "../src/num.js"

test("clamp returns n when n is inside the range", () => {
  assert.equal(clamp(5, 0, 10), 5)
})

test("clamp returns min when n is below min", () => {
  assert.equal(clamp(-5, 0, 10), 0)
})

test("clamp returns max when n is above max", () => {
  assert.equal(clamp(15, 0, 10), 10)
})

test("clamp returns the lower bound unchanged when n equals min", () => {
  assert.equal(clamp(0, 0, 10), 0)
})

test("clamp returns the upper bound unchanged when n equals max", () => {
  assert.equal(clamp(10, 0, 10), 10)
})

test("clamp throws a RangeError when min > max", () => {
  assert.throws(() => clamp(5, 10, 0), RangeError)
})
