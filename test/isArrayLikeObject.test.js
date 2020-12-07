import isArrayLikeObject from '../src/isArrayLikeObject'

test('Array returns true', () => {
  const arr = [1, 2, 3]
  expect(isArrayLikeObject(arr)).toBe(true)
})

test('String returns false', () => {
  const str = 'test'
  expect(isArrayLikeObject(str)).toBe(false)
})

test('Function returns false', () => {
  const func = () => null
  expect(isArrayLikeObject(func)).toBe(false)
})
