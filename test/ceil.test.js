import ceil from '../src/ceil'

test('Positive number, no precision', () => {
  expect(ceil(1.01)).toBe(2)
})

test('Positive number, positive precision', () => {
  expect(ceil(1.01, 1)).toBe(1.1)
})

test('Positive number, negative precision', () => {
  expect(ceil(101, -1)).toBe(110)
})

test('Negative number, no precision', () => {
  expect(ceil(-1.01)).toBe(-1)
})

test('Negative number, positive precision', () => {
  expect(ceil(-1.01, 1)).toBe(-1)
})

test('Negative number, negative precision', () => {
  expect(ceil(-101, -1)).toBe(-100)
})

test('Zero, no precision', () => {
  expect(ceil(0)).toBe(0)
})

test('Zero, positive precision', () => {
  expect(ceil(0, 1)).toBe(0)
})

test('Zero, negative precision', () => {
  expect(ceil(0, -1)).toBe(0)
})

test('Increase precision', () => {
  expect(ceil(1, 3)).toBe(1)
})

test('Decrease precision', () => {
  expect(ceil(1, -3)).toBe(1000)
})

test('Non integer precision', () => {
  expect(ceil(1.01, 1.1)).toBe(NaN)
})

