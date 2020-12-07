import isEmpty from '../src/isEmpty'


import isPrototype from '../src/.internal/isPrototype.js'


test('Null returns true', () => {
  expect(isEmpty(null)).toBe(true)
})

test('Integer returns true', () => {
  const int = 1
  expect(isEmpty(int)).toBe(true)
})

test('Empty array returns true', () => {
  expect(isEmpty([])).toBe(true)
})

test('Non-empty array returns false', () => {
  const nonEmpty = [1, 2, 3]
  expect(isEmpty(nonEmpty)).toBe(false)
})

test('Empty string returns true', () => {
  expect(isEmpty('')).toBe(true)
})

test('Non-empty string returns false', () => {
  const nonEmpty = 'string'
  expect(isEmpty(nonEmpty)).toBe(false)
})

test('Object without keys returns true', () => {
  expect(isEmpty({})).toBe(true)
})

test('Object with some keys returns false', () => {
  const obj = { key: 'value' }
  expect(isEmpty(obj)).toBe(false)
})

test('Empty set returns true', () => {
  const set = new Set()
  expect(isEmpty(set)).toBe(true)
})

test('Empty map returns true', () => {
  const map = new Map()
  expect(isEmpty(map)).toBe(true)
})

test('Empty prototype returns true', () => {
  function Proto() {}
  const testProto = new Proto()
  expect(isEmpty(testProto.__proto__)).toBe(true)
})
