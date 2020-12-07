import memoize from '../src/memoize'

test('Memoize function and call it', () => {
  const obj = { a: 1, b: 2 }

  const memoized = memoize(x => Object.keys(x))
  expect(memoized(obj)).toEqual(Object.keys(obj))
})

test('Memoize function, modify cache and call memoized function', () => {
  const obj = { a: 1, b: 2 }
  const ans = Object.keys(obj)
  const modified = ['e', 'f']

  const memoized = memoize(x => Object.keys(x))
  expect(memoized(obj)).toEqual(ans)
  memoized.cache.set(obj, modified)
  expect(memoized(obj)).toEqual(modified)
})

test('Memoize function, modify parameter and call memoized function', () => {
  const obj = { a: 1, b: 2 }
  const ans = Object.keys(obj)

  const memoized = memoize(x => Object.keys(x))
  expect(memoized(obj)).toEqual(ans)
  obj.x = 5
  expect(memoized(obj)).toEqual(ans)
})

test('Null as a function to memoize', () => {
  expect(() => memoize(null)).toThrow(TypeError)
})

test('Bad resolver function', () => {
  expect(() => memoize(() => null, 'test')).toThrow(TypeError)
})
