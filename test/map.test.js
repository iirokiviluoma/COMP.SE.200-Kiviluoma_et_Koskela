import map from '../src/map'

test('Integer array and function with one param', () => {
  const arr = [2, 4, 6]
  const func = x => 2*x
  expect(map(arr, func)).toEqual([4, 8, 12])
})

test('Array and null returning function returns nulls', () => {
  const arr = [1, 2, 3]
  const func = () => null
  expect(map(arr, func)).toEqual([null, null, null])
})

test('Null returns empty array', () => {
  const func = () => null
  expect(map(null, func)).toEqual([])
})
