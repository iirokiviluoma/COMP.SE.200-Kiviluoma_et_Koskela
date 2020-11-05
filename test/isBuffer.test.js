import isBuffer from '../src/isBuffer'

test('Valid Buffer returns true', () => {
  const buffer = Buffer(10)
  expect(isBuffer(buffer)).toBe(true)
})

test('Typed array returns false', () => {
  const tArray = new Uint8Array(10)
  expect(isBuffer(tArray)).toBe(false)
})

test('null returns false', () => {
  expect(isBuffer(null)).toBe(false)
})

// TODO: Test isBuffer.js rows 13-33
