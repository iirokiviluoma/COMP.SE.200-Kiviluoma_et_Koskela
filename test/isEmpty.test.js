import isEmpty from '../src/isEmpty'

test('Null returns true', () => {
  expect(isEmpty(null)).toBe(true)
})

test('Integer returns true', () => {
  const int = 1
  expect(isEmpty(int)).toBe(true)
})

test('Empty array returns true', () => {
  expect(isEmpty([])).toBe(true)
})

test('Non-empty array returns false', () => {
  const nonEmpty = [1, 2, 3]
  expect(isEmpty(nonEmpty)).toBe(false)
})

test('Empty string returns true', () => {
  expect(isEmpty('')).toBe(true)
})

test('Non-empty string returns false', () => {
  const nonEmpty = 'string'
  expect(isEmpty(nonEmpty)).toBe(false)
})

test('Object without keys returns true', () => {
  expect(isEmpty({})).toBe(true)
})

test('Object with some keys returns false', () => {
  const obj = { key: 'value' }
  expect(isEmpty(obj)).toBe(false)
})
