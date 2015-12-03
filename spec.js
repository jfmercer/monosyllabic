var calculator = require('./calculator.js');

describe('Calculator Tests', function() {
  it('should add two', function() {
    expect(calculator.addTwo(2)).toEqual(4);
    expect(calculator.addTwo(4)).toEqual(6);
    expect(calculator.addTwo(8)).toEqual(10);
  });

  it('should add three', function() {
    expect(calculator.addThree(2)).toEqual(5);
    expect(calculator.addThree(4)).toEqual(7);
    expect(calculator.addThree(8)).toEqual(11);
  });

  it('should add four', function() {
    expect(calculator.addFour(2)).toEqual(6);
    expect(calculator.addFour(4)).toEqual(8);
    expect(calculator.addFour(8)).toEqual(14);
  });
});