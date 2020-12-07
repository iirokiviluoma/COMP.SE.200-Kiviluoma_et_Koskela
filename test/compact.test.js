import compact from '../src/compact'

test('No falsey values', () => {
  expect(compact([1,2,3])).toStrictEqual([1,2,3])
})

test('Falsey values', () => {
  expect(compact([0,1,false, null, '', NaN, 2,3])).toStrictEqual([1,2,3])
})

test('Falsey value in nested array', () => {
  expect(compact([0,1,[false],2,3])).toStrictEqual([1,[false],2,3])
})