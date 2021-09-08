"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * @param {Number} Value the beginging value to be accumlated
 * @param {Number} increment increments by this number
 * @returns {undefined}
 */
function Accumulator(Value, increment) {
  //implement this
  this.currentValue = Value;
  this.increment = increment;
  this.accumulate = function () {
    this.currentValue += this.increment;
    return this.currentValue;
  };
  this.report = function () {
    return this.currentValue;
  };
}
// let accumulator = new Accumulator(5, 10);
// accumulator.report();
// accumulator.report();
// console.log(accumulator.startingValue);

/**
 * @returns {Calculator} this is a constructor function
 */
function Calculator() {
  this.a = 0;
  this.b = 0;
  this.setValues = function (a, b) {
    this.a = a;
    this.b = b;
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };

  
}
