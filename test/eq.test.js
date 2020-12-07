import eq from '../src/eq'

test('Two deeply equal objects', () => {
  expect(eq({'a':1}, {'a':1})).toBe(false)
})

test('Two deeply non-equal objects', () => {
  expect(eq({'a':1}, {'a':2})).toBe(false)
})

test('Same objects', () => {
  fooObject = {a: 1}
  expect(eq(fooObject, fooObject)).toBe(true)
})

test('Same type, same values', () => {
  expect(eq('foo', 'foo')).toBe(true)
})

test('Same type, different values', () => {
  expect(eq('foo', 'bar')).toBe(false)
})

test('Different types', () => {
  expect(eq(1, '1')).toBe(false)
})
