import countBy from '../src/countBy'

test('All same value', () => {
  expect(countBy([{'a':'foo'}, {'a':'foo'}], value => value.a)).toStrictEqual({foo:2})
})

test('Different values', () => {
  expect(countBy([{'a':'foo'}, {'a':'bar'}], value => value.a)).toBe({foo:1, bar:1})
})

test('No value found', () => {
  expect(countBy([{'a':'foo'}, {'a':'foo'}], value => value.b)).toBe({})
})

test('One object', () => {
  expect(countBy({'a':'foo'}, value => value.a)).toBe({foo:1})
})

test('Array of non-objects', () => {
  expect(countBy('foo', value => value.a)).toBe(undefined)
})