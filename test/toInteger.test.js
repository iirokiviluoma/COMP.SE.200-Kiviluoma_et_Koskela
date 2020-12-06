import toInteger from '../src/toInteger'

test('Min possible number returns 0', () => {
  expect(toInteger(Number.MIN_VALUE)).toBe(0)
})

test('Inifinite number returns max possible value', () => {
  expect(toInteger(Infinity)).toBe(Number.MAX_VALUE)
})

test('Odd positive number rounds it down', () => {
  const odd = 1.5
  expect(toInteger(odd)).toBe(Math.floor(odd))
})
