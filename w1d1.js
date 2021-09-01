/*
Day1 assigment
*/
// Question 1
let sales = 1000.00;
let saleMan = "Salaried";

if (saleMan === "Salaried"){

    if(sales< 300){
        console.log("no commision");
    }else if (sales < 500){
        console.log("commision is " + (0.01*sales) );
    }else{
       console.log("Commision is "+ (0.02*sales))
    }
}else{ 
    if(sales >300 && sales < 500){
        console.log("Commision is " + (0.02*sales));
    }else{
        console.log ("Commision is " + 0.03*sales);

    }
}

// Question  = 2


let prompt = require ("prompt-sync")();

let age;
do{
    age=prompt ("Could you enter your age");
    console.log("your age is " + age)
}
while (age<19);


// Question = 3
let prompt = require ("prompt-sync")();

let initialAmount = prompt ("Enter first inital amount");
let numberOfYearToCompound= prompt("Enter the number of years to Calculate");
let interestRate= prompt ('Enter interest rate');
let  totalInterest= initialAmount(1+ interestRate/2)^ (numberOfYearToCompound);
console.log("Total compund interest rate " + totalInterest);

// Question = 4

let number = 5;
for (let i=1; i<= number; i++){
    let row = "";
    for (let j= 1; j<=number; j++){
        row+=j;
    }
    console.log(row);
}

let number=5;
for(let i= 1; i<=number;i++){
    let row="";
    for(let j=1; j<=i; j++){
        row +=i;
    }

console.log(row);
}

let number=5;
for(let i=5; i>=1; i--){
    let row= "";
    for(let j=1; j<=i; j++){
        row +=i;

    }
    console.log(row);

}

// Question 5
let prompt = require ("prompt-sync ")();
let housePrice= prompt("enter the house price");
if(housePrice <= 50000){
    console.log(housePrice*0.05);
}else if (housePrice <= 100000){
    console.log(1000 + 0.1*(housePrice -50000));
}else if (housePrice <= 200000){
    console.log(2000+0.15*(housePrice-100000));
}else (housePrice > 200000)
    console.log(5000 + 0.1* (housePrice -200000))







 