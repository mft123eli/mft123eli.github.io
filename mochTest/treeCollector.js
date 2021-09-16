"use strict";
//Question 7

let lisa= {​​​​​​ name: "Lisa", next: null }​​​​​​
let berta= {​​​​​​ name: "Berta", next: null }​​​​​​
let maggie= {​​​​​​ name: "Maggie", next: null }​​​​​​
let hommer= {​​​​​​ name: "Hommer", next: [maggie, berta, lisa] }​​​​​​
let abe= {​​​​​​ name: "Abe", next: hommer }​​​​​​
console.log(abe);
 
function linkedlist(arg) {​​​​​​
    let name1 = arg.name;
    let name2 = arg.next;
    if (name2 === null) {​​​​​​

    return name1;
    }​​​​​​
    else {​​​​​​
        for (let value in arg.name) {​​​​​​
        linkedlist(value)

        }​​​​​​
    }​​​​​​
    return name1, name2;
}​​​​​​
console.log(linkedlist(abe));

