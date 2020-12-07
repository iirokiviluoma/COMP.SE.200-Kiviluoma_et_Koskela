import filter from '../src/filter'

test('One object found', () => {
  const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred',   'active': false }
  ]
  
  expect(filter(users, ({active}) => active)).toStrictEqual([{ 'user': 'barney', 'active': true }])
})

test('No objects found', () => {
  const users = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred',   'active': false }
  ]
  
  expect(filter(users, ({active}) => active)).toStrictEqual([[]])
})
