import castArray from "../src/castArray"

test('One input', () => {
  expect(castArray('foo')).toStrictEqual(['foo'])
})

test('Array input', () => {
  expect(castArray(['foo'])).toStrictEqual(['foo'])
})
