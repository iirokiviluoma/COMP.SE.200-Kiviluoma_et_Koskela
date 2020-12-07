import endsWith from '../src/endsWith'

test('True with default position', () => {
  expect(endsWith('abc', 'c')).toBe(true)
})

test('False with default position', () => {
  expect(endsWith('abc', 'd')).toBe(false)
})

test('True with position argument', () => {
  expect(endsWith('abc', 'b', 2)).toBe(true)
})

test('False with position argument', () => {
  expect(endsWith('abc', 'b', 1)).toBe(false)
})

test('True with multichar target', () => {
  expect(endsWith('abc', 'bc')).toBe(true)
})

test('False with multichar target', () => {
  expect(endsWith('abc', 'cb')).toBe(false)
})

test('Target > string length', () => {
  expect(endsWith('abc', 'c', 4)).toBe(false)
})

test('Negative target', () => {
  expect(endsWith('abc', 'c', -1)).toBe(false)
})
