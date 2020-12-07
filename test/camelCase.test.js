import camelCase from '../src/camelCase'

test('Two words', () => {
  expect(camelCase('Foo Bar')).toBe('fooBar')
})

test('One word', () => {
  expect(camelCase('fooBar')).toBe('foobar')
})

test('Three words', () => {
  expect(camelCase('Foo Bar_Bar')).toBe('fooBarBar')
})
