import slice from '../src/slice'

test('Array without start and end', () => {
  const arr = [1, 2, 3, 4, 5]
  expect(slice(arr)).toEqual(arr)
})

test('Array with negative start', () => {
  const arr = [1, 2, 3, 4, 5]
  expect(slice(arr, -1)).toEqual([5])
})

test('Array with negative end', () => {
  const arr = [1, 2, 3, 4, 5]
  expect(slice(arr, 0, -1)).toEqual([1, 2, 3, 4])
})

test('Array with end > Array.length', () => {
  const arr = [1, 2, 3, 4, 5]
  const ans = [].concat(arr)
  ans.push(undefined)
  expect(slice(arr, 0, arr.length + 1)).toEqual(ans)
})

test('Array with start > end', () => {
  const arr = [1, 2, 3, 4, 5]
  expect(slice(arr, 2, 1)).toEqual([])
})

test('Empty array returns empty array', () => {
  expect(slice([])).toEqual([])
})

test('Null returns empty array', () => {
  expect(slice(null)).toEqual([])
})
