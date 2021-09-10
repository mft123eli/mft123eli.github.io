"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests


function filterRange(arr, a, b) {
    return arr.filter(x => (a <= x && x <= b));

  }

 
  function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
        
    }
    

  }
 

  function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
 
    this.calculate = function (str) {
 
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];
 
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
 
        return this.methods[op](a, b);
    };
 
    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
  }

  function unique(arr) {
    let output = [];
    for (let value of arr) {
        if (output.indexOf(value) === -1) {
            output.push(value);
        }
    }
    return output;

  }


  function groupById(array) {
    let obj = {}
    for (let value of array) {
        obj[value.id] = value
    }
    return obj
}
let users1 = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];
      
  