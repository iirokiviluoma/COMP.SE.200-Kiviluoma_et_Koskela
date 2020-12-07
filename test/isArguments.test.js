import isArguments from '../src/isArguments'

test('Function returns true', () => {
  const func = () => arguments
  expect(isArguments(func())).toBe(true)
})

test('Object returns false', () => {
  const obj = { key: 'value' }
  expect(isArguments(obj)).toBe(false)
})

test('Array returns false', () => {
  const arr = [1, 2, 3]
  expect(isArguments(arr)).toBe(false)
})
