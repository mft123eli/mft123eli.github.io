"use strict";

const assert = require("assert");
module.exports={maxOfThree, sumNumbers, multiplyNumbers, findLongestword,reverseArray,reverseArrayInPlace,scoreExams};
/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c){ 

    let max = a;
    if (a > b && a > c) {
        
        max=a;
        return a;
    }
    else if (b>a && b> c) {
        max=b
        return b;
    }
    else 

    return c;
}
  

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let total = 0;
    for (const number of arr){
        total += number;
    }
    return total;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr){
    let product = 1;
    let num= String(arr)
    for (let i=0; i<num.length; i++){ 

    product*=Number(num.charAt(i));
    }
    return product;
   

}
/**
 * 
 * @param {Array} arr number
 * @returns {Number} the longest string
 */
 function findLongestword(arr) {
    let longestWord = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (longestWord < arr[i].length) {
            longestWord = arr[i].length;
        }
    }
    return longestWord;
}


/**
 * 
 * @param {array} array number  reversed
 * @returns {Number} return reversed output
 */

function  reverseArray(array) {
    let result = [];
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(arr[i]);
    }
    return result;
  
  }
/**
   * 
   * @param {array} array value reverseArray
   * @returns {Number} reverse number
   */
 function reverseArrayInPlace(array) {
    let temp = [];
    for (let i = 0; i < array.length; i++) {
      temp.unshift( array[i]);
            }
           for(let i =0;i<array.length;i++){
               array[i]=temp[i];
           }
    return array;
  }
  
/**
* 
* @param {int} studentAnswer  score
* @param {int} correctAnswers score
* @returns {Number} coorect score
*/
function scoreExams(studentAnswer, correctAnswers) {
  let score = [];
  for (let eachAnswer of studentAnswer) {
      let answer = 0;
      for (let i = 0; i < eachAnswer.length; i++) {
          if (eachAnswer[i] === correctAnswers[i])
              answer++;
      }
      score.push(answer);
  }
  return score;
}



