import words from '../src/words'

test('String returns words as array', () => {
  const str = 'software testing assignment'
  const ans = str.split(' ')
  expect(words(str)).toEqual(ans)
})

test('Array of strings and pattern', () => {
  const str = 'abc def / ghi'
  const reg = /[^, ]+/g
  const ans = ['abc', 'def', '/', 'ghi']
  expect(words(str, reg)).toEqual(ans)
})

test('String with unicode word strips the unicode word', () => {
  const uni = '&#9201;'
  const str = `this string contains unicode ${uni}`
  const ans = str.split(' ')
  ans[ans.length-1] = '9201'
  expect(words(str)).toEqual(ans)
})

test('Empty string without pattern returns empty array', () => {
  const str = ''
  expect(words(str)).toEqual([])
})

test('String with pattern returns empty array if none match', () => {
  const str = 'abc def ghi jkl'
  const reg = /x/g
  expect(words(str, reg)).toEqual([])
})
