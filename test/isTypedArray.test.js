import isTypedArray from '../src/isTypedArray'

test('Empty array returns false', () => {
  expect(isTypedArray([])).toBe(false)
})

test('Uint array returns true', () => {
  const arr = new Uint8Array(2)
  expect(isTypedArray(arr)).toBe(true)
})

test('Float array returns true', () => {
  const arr = new Float32Array(2)
  expect(isTypedArray(arr)).toBe(true)
})

test('Null returns false', () => {
  expect(isTypedArray(null)).toBe(false)
})

test('Object returns false', () => {
  const obj = { key: 'value' }
  expect(isTypedArray(obj)).toBe(false)
})
