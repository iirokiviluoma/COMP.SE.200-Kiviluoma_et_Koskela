import chunk from '../src/chunk'

test('Even chunks', () => {
  expect(chunk(['a', 'b', 'c', 'd'],2)).toStrictEqual([['a', 'b'], ['c', 'd']])
})

test('Non-Even chunks', () => {
  expect(chunk(['a', 'b', 'c', 'd'],3)).toStrictEqual([['a', 'b', 'c'], ['d']])
})

test('Null array', () => {
  expect(chunk(null)).toStrictEqual([])
})

test('Empty array', () => {
  expect(chunk([],1)).toStrictEqual([])
})

test('Size > array.length', () => {
  expect(chunk(['a', 'b', 'c', 'd'], 5)).toStrictEqual([['a', 'b', 'c', 'd']])
})

test('Default size', () => {
  expect(chunk(['a', 'b', 'c', 'd'])).toStrictEqual([['a'], ['b'], ['c'], ['d']])
})

test('Size = 0', () => {
  expect(chunk(['a', 'b', 'c', 'd'], 0)).toStrictEqual([])
})

test('Size < 0', () => {
  expect(chunk(['a', 'b', 'c', 'd'], -1)).toStrictEqual([])
})