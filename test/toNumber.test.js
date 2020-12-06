import toNumber from '../src/toNumber'

import isObject from '../src/isObject.js'

test('Number returns itself', () => {
  const num = 2020.12
  expect(toNumber(num)).toBe(num)
})

test('Number string converts it to number', () => {
  const str = '2020'
  expect(toNumber(str)).toBe(Number(str))
})

test('Symbol from number returns NaN', () => {
  const sym = Symbol(2020)
  expect(toNumber(sym)).toBe(NaN)
})

test('Object returns NaN', () => {
  const obj = {
    key1: 1,
    key2: 2
  }

  expect(toNumber(obj)).toBe(NaN)
})

test('Null returns 0', () => {
  expect(toNumber(null)).toBe(0)
})

test('Object with valueOf-function returns its value', () => {
  const func = () => 2020
  
  const obj = {
    valueOf: func
  }

  expect(toNumber(obj)).toBe(2020)
})

test('Object with valueOf-string returns NaN', () => {
  const obj = {
    valueOf: 'test'
  }
  expect(toNumber(obj)).toBe(NaN)
})
