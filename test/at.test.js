import at from '../src/at'

test('Valid object and one path', () => {
  expect(at({'a': 2}, 'a[0]')).toBe([2])
})

test('Valid object and multiple paths', () => {
  expect(at({'a': 2, 'b': 3}, ['a[0]', 'b[0]'])).toBe([2, 3])
})

test('Valid object, invalid path', () => {
  expect(at({'a': 2}, 'a[1]')).toBe([undefined])
})

test('Valid object, valid and invalid path', () => {
  expect(at({'a': 2, 'b': 3}, ['a[0]', 'b[1]'])).toBe([2, undefined])
})