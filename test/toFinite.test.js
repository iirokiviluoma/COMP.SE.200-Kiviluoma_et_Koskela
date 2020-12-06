import toFinite from '../src/toFinite'

test('Infinite number returns max possible number', () => {
  expect(toFinite(Infinity)).toBe(Number.MAX_VALUE)
})

test('Negative infinite number returns negative max possible number', () => {
  expect(toFinite(-Infinity)).toBe(-Number.MAX_VALUE)
})

test('Min possible number returns itself', () => {
  expect(toFinite(Number.MIN_VALUE)).toBe(Number.MIN_VALUE)
})

test('Random positive number (0-100) returns itself', () => {
  const random = Math.floor(Math.random() * 100)
  expect(toFinite(random)).toBe(random)
})

test('Null returns 0', () => {
  expect(toFinite(null)).toBe(0)
})

test('Zero returns 0', () => {
  expect(toFinite(0)).toBe(0)
})

test('String returns 0', () => {
  const str = 'test'
  expect(toFinite(str)).toBe(0)
})
