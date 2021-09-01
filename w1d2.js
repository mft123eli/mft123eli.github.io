/*
Day2 assigment
*/
// Question 1

/*
   
*/
function calculateSalesCommision(salaried, sales){
    if (salaried == true){
    
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
            console.log ("Commision is " + (0.03*sales));
    
        }
    }
    calculateSalesCommision("expect 0: ",true,200);
    calculateSalesCommision("expect 0: ",false,200);
    calculatesSalesCommision("expect 3: ",true,300);
    
    
    // Question = 2
    /*
     this function do a calcuation of compund interest by getting input (initalAmount, numberOfYearToCompound, interestRate)
     it will use formulas to do calculation.
     it will print out the expected output. 
     
    */
    
    function computeCompoundInterest(initialAmount, numberOfYearToCompound, interestRate)
    {
    let  totalInterest= initialAmount*(1+ interestRate/12)** (numberOfYearToCompound*12);
    return totalInterest;
    }
    
    
    computeCoumpoundInterest(initialAmount, numberOfYearToCompound, interestRate);
     console.log("expect 110.47: ", compoundInterest(100,10,1))
    
    // Question = 3
    /*
    This function it will calculate total down payment amount process
    by getting input (cost)  and compare the price to which interestRate get
    outPut the downPayment 
    */
     function computeDownPayment(cost)
    {
    if(cost <= 50000){
        console.log(cost*0.05);
    }else if (cost <= 100000){
        console.log(1000 + 0.1*(cost -50000));
    }else if (cost <= 200000){
        console.log(2000+0.15*(cost-100000));
    }else (cost > 200000)
        console.log(5000 + 0.1* (cost -200000));
    }
    computeDownPayment(cost);
    computeDownPayment("expect 2000:", 200000);
    
    //Question = 4
    /*
    this function perform some matemathical calculation
     */
    function sumDigits(number){
    let sum=0;
    let num= String(number);
    for(let i=0; i<num.length; i++){
    sum += Number(num.charAt(i));
    }
    return sum;}
    sumDigits(number);
    console,log("expect 10: ", sumDigits(1234));
    
    function multiDigits(number){
    let product=1;
    let num= String(number)
    for (let i=0: i<num.length; i++){ 
    product*=Number(num.charAt(i));
    }
    return product;
    }
    multiDigits(number);
    console.log("expect 24:", multDigits(1234));
    
    Question = 5;
    /*
    this function do some temperature calculation
    */
    
    function convertFahrenheit(tempFahrenheit){
    let tempCelsius=(tempFahrenheit-32)*(5/9);
    return tempCelsius;
    }
    convertFahrenheit(tempFahrenheit);
    console.log("expect 0:", convertFahrenheit(32));
    console.log("expect -17.7778:", convertFahrenheit(0))
    
    Question = 6;
    /*
    
    */
    function calcDistance(x1, y1, x2, y2){
    let distance = Math.sqrt(((x2-x1)**2) + ((y2-y1)**2));
    return distance;
     }
    calcDistance(x1,y1,x2,y2)
    console.log("expect 5: ", calcDistance(0,0,5,5));
    
    
    
    
    
    
    
    