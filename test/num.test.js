import { test } from "node:test"
import assert from "node:assert/strict"
import { clamp, percent } from "../src/num.js"

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

test("percent returns the whole-number percentage for an ordinary ratio", () => {
  assert.equal(percent(50, 200), "25%")
})

test("percent rounds down to the nearest integer", () => {
  assert.equal(percent(1, 3), "33%")
})

test("percent rounds up to the nearest integer", () => {
  assert.equal(percent(2, 3), "67%")
})

test("percent caps a ratio above 1 at 100%", () => {
  assert.equal(percent(130, 100), "100%")
})

test("percent returns 0% when whole is 0", () => {
  assert.equal(percent(5, 0), "0%")
})
