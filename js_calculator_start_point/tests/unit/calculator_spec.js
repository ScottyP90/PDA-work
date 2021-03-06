var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it should add test', function(){
    calculator.previousTotal = 1
    calculator.add(4);
    assert.equal(5, calculator.runningTotal);
  })

  it('it should subtract test', function(){
    calculator.previousTotal = 7
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal);
  })

  it('it should multiply test', function (){
    calculator.previousTotal = 3
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal);
  })

  it ('it should divide test', function(){
    calculator.previousTotal = 21
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal);
  })


});
