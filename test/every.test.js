import every from '../src/every'

test('All true', () => {
  expect(every([true, !false, 1], Boolean)).toBe(true)
})

test('One false', () => {
  expect(every([true, false, 1], Boolean)).toBe(false)
})

test('Empty array', () => {
  expect(every([])).toBe(true)
})

