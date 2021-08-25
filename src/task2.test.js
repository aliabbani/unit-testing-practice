const reverseString = require('./task2.js');

test('When type a string, should return string reverse', () => {
  expect(reverseString('ali')).toBe('ila');
});