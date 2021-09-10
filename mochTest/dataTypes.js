"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { ucFirst, getMaxSubSum, checkSpam,truncate , camelize, extractCurrencyValue}; //add all of your function names here that you need for the node mocha tests



function ucFirst(str) {
     let  firstLetter=str.charAt(0).toUpperCase();
     return firstLetter + str.slice(1);

  }

  function checkSpam(str) {
    return str.includes("ViAgRA") || str.includes("xxxxx");
 
  }
  function extractCurrencyValue(str) {
    let word = str.slice(1);
    let currency = parseInt(word);
   
    return currency;
  }


  function truncate(str, maxlength) {

  //   const end = "…";
  // if (str >= maxlength) {
  //   return str.slice(0, maxlength - 1) + end;
  // }
  // return str.slice(0, maxlength + 1);
  return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;

  }

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(array) {
  let maxSum = 0; 
     let sumFixedStart= 0;

     for(let number of array){

        sumFixedStart += number;
        maxSum = Math.max(maxSum, sumFixedStart);
        if (sumFixedStart < 0)sumFixedStart=0;
    }
    return maxSum;


}

function camelize(str) {
  let word = str.split("-");
  let word1 = "";
  word1 += word[0];
  for (let i = 1; i < word.length; i++) {
    let words = word[i];
    word1 = word1 + word[i].charAt(0).toUpperCase() + words.slice(1);
  }
  return word1;
  

  }