import at from '../src/at'

test('Valid object and one path', () => {
  expect(at({'a': 2}, 'a')).toStrictEqual([2])
})

test('Valid object and multiple paths', () => {
  expect(at({'a': 2, 'b': [3]}, ['a', 'b[0]'])).toStrictEqual([2, 3])
})

test('Valid object, invalid path', () => {
  expect(at({'a': 2}, 'a[1]')).toStrictEqual([undefined])
})

test('Valid object, valid and invalid path', () => {
  expect(at({'a': 2, 'b': 3}, ['a', 'b[1]'])).toStrictEqual([2, undefined])
})