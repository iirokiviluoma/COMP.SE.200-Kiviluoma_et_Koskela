import defaultTo from '../src/defaultTo'
import defaultToAny from '../src/defaultToAny'

test('Valid values', () => {
  expect(defaultToAny('foo', 'bar', 'foobar')).toBe('foo')
})

test('undefined', () => {
  expect(defaultToAny(undefined, 'bar')).toBe('bar')
})

test('NaN as default value', () => {
  expect(defaultToAny(undefined, NaN, 'foo')).toBe('foo')
})