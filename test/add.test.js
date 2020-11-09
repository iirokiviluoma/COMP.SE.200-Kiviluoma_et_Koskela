import add from "../src/add.js"

test('Positive integers', () => {
  expect(add(1,1)).toBe(2)
})

test('Postive and negative integer', () => {
  expect(add(1,-1)).toBe(0)
})

test('Negative integers', () => {
  expect(add(-1,-1)).toBe(-2)
})

test('Floating points', () => {
  expect(add(1.1, 1.1)).toEqual(2.2)
})