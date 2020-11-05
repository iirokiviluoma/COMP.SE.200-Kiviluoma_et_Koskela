import isDate from '../src/isDate'

test('Valid Date returns true', () => {
  const d = new Date()
  expect(isDate(d)).toBe(true)
})

test('String formed from a Date returns false', () => {
  const dString = new Date().toString()
  expect(isDate(dString)).toBe(false)
})

// TODO: Test isDate.js row 25
