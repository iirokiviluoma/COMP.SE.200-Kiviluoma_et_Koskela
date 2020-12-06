import isSymbol from '../src/isSymbol'

test('Symbol returns true', () => {
  const sym = Symbol()
  expect(isSymbol(sym)).toBe(true)
})

test('Symbol inside object returns true', () => {
  const objSym = new Object(Symbol('test'))
  expect(isSymbol(objSym)).toBe(true)
})

test('Null returns false', () => {
  expect(isSymbol(null)).toBe(false)
})

test('Number returns false', () => {
  const num = 0
  expect(isSymbol(num)).toBe(false)
})

test('String returns false', () => {
  const str = 'test'
  expect(isSymbol(str)).toBe(false)
})
