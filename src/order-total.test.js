const stringLength = require('./order-total.js');

test('When type a string, should return string length', () => {
  expect(stringLength('ali')).toBe(3);
});

test('When type a string, should return string length', () => {
  expect(stringLength('type')).toBe(4);
});

test('When type a string, the string should be between 1 and 10 . else should return invalid', () => {
  expect(stringLength('sophisticated')).toThrowError('invalid');
});