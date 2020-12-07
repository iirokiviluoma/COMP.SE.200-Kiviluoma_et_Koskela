import isDate from '../src/isDate'

test('Valid Date returns true', () => {
  const d = new Date()
  expect(isDate(d)).toBe(true)
})

test('String formed from a Date returns false', () => {
  const dString = new Date().toString()
  expect(isDate(dString)).toBe(false)
})

test('Object returns false', () => {
  const obj = { key: 'value' }
  expect(isDate(obj)).toBe(false)
})

test('Null returns false', () => {
  expect(isDate(null)).toBe(false)
})

test('Function returns false', () => {
  const func = () => null
  expect(isDate(func)).toBe(false)
})
