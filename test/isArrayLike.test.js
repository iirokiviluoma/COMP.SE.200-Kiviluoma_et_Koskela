import isArrayLike from '../src/isArrayLike'

test('Array returns true', () => {
  const arr = [1, 2, 3]
  expect(isArrayLike(arr)).toBe(true)
})

test('String returns true', () => {
  const str = 'test'
  expect(isArrayLike(str)).toBe(true)
})

test('Function returns false', () => {
  const func = () => null
  expect(isArrayLike(func)).toBe(false)
})
