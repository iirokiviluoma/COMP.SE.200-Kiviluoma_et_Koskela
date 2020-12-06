import toString from '../src/toString'

test('Number returns the number string', () => {
  expect(toString(2020)).toBe('2020')
})

test('Zero returns it as a string', () => {
  expect(toString(0)).toBe('')
})

test('Negative zero returns it as a string', () => {
  expect(toString(-0)).toBe('')
})

test('Null returns empty string', () => {
  expect(toString(null)).toBe('')
})

test('Undefined returns empty string', () => {
  expect(toString(undefined)).toBe('')
})

test('Array with strings and number returns...', () => {
  const arr = ['Co', 'Vi', 'D', 19]
  expect(toString(arr)).toBe('Co,Vi,D,19')
})

test('Symbol returns symbol string', () => {
  const str = 'test'
  const sym = Symbol(str)
  expect(toString(sym)).toBe(`Symbol(${str})`)
})

test('Array with null returns empty string', () => {
  expect(toString([null])).toBe('')
})
