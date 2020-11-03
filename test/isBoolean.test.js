import isBoolean from '../src/isBoolean.js'

describe('isBoolean.js', () => {
  test('Booleans return true', () => {
    expect(isBoolean(false)).toBe(true)
    expect(isBoolean(true)).toBe(true)
  })

  test('Null returns false', () => {
    expect(isBoolean(null)).toBe(false)
  })
})
