import isObjectLike from '../src/isObjectLike'

test('Null returns false', () => {
  expect(isObjectLike(null)).toBe(false)
})

test('Object with some keys returns true', () => {
  const obj = { key: 'value' }
  expect(isObjectLike(obj)).toBe(true)
})

test('Object without keys returns true', () => {
  expect(isObjectLike({})).toBe(true)
})

test('Array returns true', () => {
  const array = [1, 2, 3]
  expect(isObjectLike(array)).toBe(true)
})

test('Function returns false', () => {
  const func = () => null
  expect(isObjectLike(func)).toBe(false)
})
