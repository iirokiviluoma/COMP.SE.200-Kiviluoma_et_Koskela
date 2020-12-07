import difference from "../src/difference"

test('Difference by one', () => {
  expect(difference([1,2], [2,3])).toStrictEqual([1])
})

test('All same', () => {
  expect(difference([1,2], [1,2])).toStrictEqual([])
})

test('All different', () => {
  expect(difference([1,2], [3,4])).toStrictEqual([1,2])
})

test('Non array', () => {
  expect(difference(1, [1,2])).toStrictEqual([undefined])
})
