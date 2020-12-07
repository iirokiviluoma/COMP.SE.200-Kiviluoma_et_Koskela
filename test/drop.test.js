import drop from '../src/drop'

test('Default n', () => {
  expect(drop([1,2,3])).toStrictEqual([2,3])
})

test('Only one element', () => {
  expect(drop([1])).toStrictEqual([])
})

test('Empty array', () => {
  expect(drop([])).toStrictEqual([])
})

test('n < array.length', () => {
  expect(drop([1,2,3], 2)).toStrictEqual([3])
})

test('n >= array.length', () => {
  expect(drop([1,2,3],4)).toStrictEqual([])
})

test('n = 0', () => {
  expect(drop([1,2,3], 0)).toStrictEqual([1,2,3])
})

test('n < 0', () => {
  expect(drop([1,2,3], -2)).toStrictEqual([1,2,3])
})

test('Non number n', () => {
  expect(drop([1,2,3], 'foo')).toStrictEqual(undefined)
})

test('Non array', () => {
  expect(drop(1)).toStrictEqual(undefined)
})
