import isLength from '../src/isLength'

test('Integer returns true', () => {
  const int = 1
  expect(isLength(int)).toBe(true)
})

test('String.length returns true', () => {
  const str = 'string'
  expect(isLength(str.length)).toBe(true)
})

test('Negative integer returns false', () => {
  const neg = -1
  expect(isLength(neg)).toBe(false)
})

test('Infinite number returns false', () => {
  expect(isLength(Infinity)).toBe(false)
})

test('Odd number returns false', () => {
  const odd = 1.5
  expect(isLength(odd)).toBe(false)
})

test('Zero returns true', () => {
  expect(isLength(0)).toBe(true)
})
