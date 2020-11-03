import chai from 'chai'
import isDate from '../src/isDate.js'

const expect = chai.expect

describe('isDate.js', () => {
  it('New Date', () => {
    const d = new Date()
    expect(isDate(d)).to.equal(true)
  })
})
