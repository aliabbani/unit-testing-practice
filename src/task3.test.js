const Calculator = require('./task3.js');

const calculator = new Calculator();

describe('my addition', () => {
  test('add', () => {
    expect(calculator.add(8, 2)).toBe(10);
  });

  test('add', () => {
    expect(calculator.add(16, 16)).toBe(32);
  });

  test('add', () => {
    expect(calculator.add(6, 0)).toBe(6);
  });
});

describe('my subtraction', () => {
  test('subtract', () => {
    expect(calculator.subtract(10, 4)).toBe(6);
  });

  test('subtract', () => {
    expect(calculator.subtract(100, 40)).toBe(60);
  });

  test('subtract', () => {
    expect(calculator.subtract(18, 0)).toBe(18);
  });
});

describe('my division', () => {
  test('divide', () => {
    expect(calculator.divide(20, 2)).toBe(10);
  });

  test('divide', () => {
    expect(calculator.divide(40, 10)).toBe(4);
  });

  test('divide', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });
});

describe('my multiplication', () => {
  test('multiply', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });

  test('multiply', () => {
    expect(calculator.multiply(2, 0)).toBe(0);
  });

  test('multiply', () => {
    expect(calculator.multiply(2, 1)).toBe(2);
  });
});