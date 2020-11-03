import chai from 'chai'
import isBoolean from '../src/isBoolean.js'

const expect = chai.expect

describe('isBoolean.js', () => {
  it('Booleans return true', () => {
    expect(isBoolean(false)).to.equal(true)
    expect(isBoolean(true)).to.equal(true)
  })

  it('Null returns false', () => {
    expect(isBoolean(null)).to.equal(false)
  })
})
