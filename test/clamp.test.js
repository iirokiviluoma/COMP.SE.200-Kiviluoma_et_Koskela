import clamp from "../src/clamp"

test('Closer to upper', () => {
  expect(clamp(2,-1,1)).toBe(1)
})

test('Closer to lower', () => {
  expect(clamp(-2,-1,1)).toBe(-1)
})

test('In the middle', () => {
  expect(clamp(0,-1,1)).toBe(0)
})

test('Outer bounds', () => {
  expect(clamp(2,1,-1)).toBe(1)
})

test('Point bound', () => {
  expect(clamp(2,1,1)).toBe(1)
})
