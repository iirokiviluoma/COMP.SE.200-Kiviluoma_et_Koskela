import upperFirst from '../src/upperFirst'

test('Empty string returns empty string', () => {
  const str = ''
  expect(upperFirst(str)).toBe((str))
})

test('All lower case', () => {
  const str = 'test string'
  const ans = 'Test string'
  expect(upperFirst(str)).toBe(ans)
})

test('All upper case', () => {
  const str = 'TEST STRING'
  expect(upperFirst(str)).toBe(str)
})

test('First word lower, second upper case', () => {
  const str = 'test STRING'
  const ans = 'Test STRING'
  expect(upperFirst(str)).toBe(ans)
})
