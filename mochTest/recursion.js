module.exports = { sum, factorial, fibonacci, outputList, outputListLoop, reverseList, reverseListLoop };
function sum(num){
    if (num == 0)
        return 0;
    return num + sum(num - 1);
}

function factorial(n){
    if (n == 1)
        return 1;
    return n * factorial(n - 1);
}
function fibonacci(n){
    if (n == 0) {
        return 0;
    }if (n == 1) {
            return 1;
    } else
        return fibonacci(n - 1) + fibonacci(n - 2);
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function outputList(list) {
    if (!list) return;
    console.log(list.value);
    outputList(list.next);
}

function outputListLoop(list) {

    while (list) {
        console.log(list.value);
        list = list.next;
    }
    return;
}
outputList(list);
outputListLoop(list)

function reverseList(list) {
    if (list.next) {
        reverseList(list.next);
    }
    console.log(list.value);
}

function reverseListLoop(list) {
    let array = []
    while (list) {
        array.push(list.value);
        list = list.next;
    }
    for (let value of array.reverse()) {
        console.log(value);
    }
}

reverseListLoop(list);
reverseList(list);


   
    
    