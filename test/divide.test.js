import divide from '../src/divide'

test('Equal division', () => {
  expect(divide(4,2)).toBe(2)
})

test('Non-equal division', () => {
  expect(divide(5,2)).toBe(2.5)
})

test('Negative and positive number', () => {
  expect(divide(-4,2)).toBe(-2)
})

test('Both negative', () => {
  expect(divide(-4,-2)).toBe(2)
})

test('Division by zero', () => {
  expect(divide(4,0)).toBe(NaN)
})

test('Non-number', () => {
  expect(divide(4,'foo')).toBe(NaN)
})

