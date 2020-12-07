import defaultTo from '../src/defaultTo'

test('NaN', () => {
  expect(defaultTo(NaN, 'foo')).toBe('foo')
})

test('null', () => {
  expect(defaultTo(null, 'bar')).toBe('bar')
})

test('undefined', () => {
  expect(defaultTo(undefined, 'foo')).toBe('foo')
})

test('Valid value', () => {
  expect(defaultTo('bar', 'foo')).toBe('bar')
})
