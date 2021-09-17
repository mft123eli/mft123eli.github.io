"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { topSalary }; //add all of your function names here that you need for the node mocha tests


function getDateAgo(){
let user= {name: "John", years :30}
let {name, years, isAdmin=false}= user;
console.log(name);
console.log(years);
console.log(isAdmin);
}
getDateAgo();
 
let salaries= {
    "Jhon":100,
    "Pete":300,
    "Mary":250
};

function topSalary(salaries){
    let maxSalary=0;
    let maxName=null;
    for( let [name, salary] of Object.entries(salaries)){
        if(salary > maxSalary){
            maxSalary=salary;
            maxName=name
        }

    }
    return maxName;
}
//console.log(topSalary(salaries));