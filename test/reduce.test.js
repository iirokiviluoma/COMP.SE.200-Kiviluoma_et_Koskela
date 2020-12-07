import reduce from '../src/reduce'

test('Integer array and sum function', () => {
  const arr = [1, 2, 3, 4, 5] // sum = 15
  const sumFunc = (n, m) => n + m
  expect(reduce(arr, sumFunc, 0)).toBe(15)
})

test('Object with integer values and sum function', () => {
  const obj = {
    key1: 1,
    key2: 2,
    key3: 3
  } // sum = 6

  const sumFunc = (n, m) => n + m
  expect(reduce(obj, sumFunc, 0)).toBe(6)
})

test('Null returns the starting accumulator', () => {
  const sumFunc = (n, m) => n + m
  const ans = 42
  expect(reduce(null, sumFunc, ans)).toBe(ans)
})
