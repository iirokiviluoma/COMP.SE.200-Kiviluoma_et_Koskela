import get from '../src/get'

const obj = { a: [{ b: 2, c: { d: 3 } }] }

test('Get with string', () => {
  expect(get(obj, 'a[0].b')).toBe(2)
})

test('Get with array', () => {
  expect(get(obj, ['a', '0', 'b'])).toBe(2)
})

test('Default value', () => {
  expect(get(obj, 'a[1]', 'foo')).toBe('foo')
})

test('Return object', () => {
  expect(get(obj, 'a[0].c')).toEqual({ d: 3 })
})

test('Null object returns undefined', () => {
  expect(get(null)).toBe(undefined)
})
