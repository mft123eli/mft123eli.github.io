"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests

/**
 *@returns {number} double the input
 */
function double(number){
    return number *2;
}
/**
 * @returns {number} 100 times the input
 */
 function times100(number){
     return number*100;

 }

/**
 * @returns {Array} creates a new array with function mapped to each element
 */


function myMap(array, fn){
    let result= [];
      
        array.forEach(function(element){
            result.push(fn(element))
        })
        
        return result;
        
    }
    
    console.log(myMap([3,4,5], double))
    console.log(myMap([3,4,5], times100))
    