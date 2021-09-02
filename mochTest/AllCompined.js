"use strict";
    const assert = require("assert");
    const methods = require("./allCodes.js");
    const calcDownpayment = methods.calcDownpayment;
    const convertFahrenheit = methods.convertFahrenheit;
    const calcDistance = methods.calcDistance;
    describe("computeDownPayment", function () {
        it("tests 40000 cost", function () {
            assert.strictEqual(calcDownpayment(40000), 2000);
        });
        it("tests 50000 cost", function () {
            assert.strictEqual(calcDownpayment(50000), 2500);
        });
        it("tests 100000 cost", function () {
            assert.strictEqual(calcDownpayment(100000), 7500);
        });
        it("tests 200000 cost", function () {
            assert.strictEqual(calcDownpayment(200000), 5000);
        });
    });
 
    describe("convertFahrenheit", function () {
        it("convertFahrenheit", function () {
            assert.strictEqual(convertFahrenheit(32), 0);
        });
        it("convertFahrenheit", function () {
            assert.strictEqual(convertFahrenheit(0), -17.77777777777778);
        });
        it("convertFahrenheit", function () {
            assert.strictEqual(convertFahrenheit(212), 100);
        });
        it("convertFahrenheit", function () {
            assert.strictEqual(convertFahrenheit(100), 37.77777777777778);
        });
    });
 
    describe("calcDistance", function () {
        it("calcDistance", function () {
            assert.strictEqual(calcDistance(0, 0, 5, 5), 7.0710678118654755);
        });
    });