"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge,includesEvenNum, includesEvenAge}; //add all of your function names here that you need for the node mocha tests



function doubleNums(arr){
    return arr.map(num => num * 2);
}


function doubleAges(arr){

    return arr.map(item=>{ (item) 
        let newAge={...item};
        newAge.age= item.age *2;
        //newAge.name= item.name;
        return newAge;
    });
   
}
 

function filterEven(arr){

   return arr.filter(item=> item%2===0);

}


function filterOver10(arr) {
 
   return arr.filter(item => item.age > 10);
    
}

function findEvenNum(arr){
    return arr.find(item=> item%2===0);

}

function findEvenAge(arr){
    return arr.find(item=> item.age %2===0);
    
    
}

function includesEvenNum(arr){
    let evenArr = arr.find(item => item%2===0);
    return arr.includes(evenArr );
    }
function includesEvenAge(arr){
    let evenAge = arr.find(item => item.age%2===0);
    if(evenAge.age!== undefined){
        return true;
    }else {
        return false;
    }

 }