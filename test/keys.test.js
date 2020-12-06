import keys from '../src/keys'

test('String returns char indexes', () => {
  const str = 'test'
  const len = str.length
  let i = -1

  const ans = Array.from(Array(len), () => {
    ++i
    return i.toString()
  })

  expect(keys(str)).toEqual(ans)
})

test('Object returns object keys', () => {
  const obj = {
    key1: 'value1',
    key2: 'value2'
  }

  const ans = Object.keys(obj)
  expect(keys(obj)).toEqual(ans)
})

test('Object without keys returns empty array', () => {
  expect(keys({})).toEqual([])
})
