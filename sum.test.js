const sum = require('./sum')

test('adds 1 & 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('3+7 = 10', () => {
  expect(sum(3, 7)).toBe(10)
})

test('null', () => {
  const n = null
  expect(n).toBeNull()
  // expect(n).toBeDefined()
  // expect(n).not.toBeUndefined()
  // expect(n).toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})