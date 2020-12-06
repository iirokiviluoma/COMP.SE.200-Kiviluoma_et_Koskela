import isObject from '../src/isObject'

test('Array returns true', () => {
  expect(1).toBe(1)
})

test('Object with some keys returns true', () => {
  const obj = { key: 'value' }
  expect(isObject(obj)).toBe(true)
})

test('Object without keys returns true', () => {
  expect(isObject({})).toBe(true)
})

test('Null returns false', () => {
  expect(isObject(null)).toBe(false)
})

test('Function returns true', () => {
  const func = () => null
  expect(isObject(func)).toBe(true)
})

test('String returns false', () => {
  const str = 'test'
  expect(isObject(str)).toBe(false)
})

test('Number returns false', () => {
  const num = 0
  expect(isObject(num)).toBe(false)
})
