import capitalize from '../src/capitalize'

test('Valid input', () => {
  expect(capitalize('fOO')).toBe('Foo')
})

test('Non letters', () => {
  expect(capitalize('2bar')).toBe('2bar')
})
