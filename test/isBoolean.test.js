import isBoolean from '../src/isBoolean'

test('true return true', () => {
  expect(isBoolean(true)).toBe(true)
})

test('false returns true', () => {
  expect(isBoolean(false)).toBe(true)
})

test('Null returns false', () => {
  expect(isBoolean(null)).toBe(false)
})

test('Object boolean returns true', () => {
  const obj = new Object(true)
  expect(isBoolean(obj)).toBe(true)
})
