
function TreeNode(value) {
    this.value = value;
    this.descendents = [];
}
   // create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');
// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);
//Question 1
<<<<<<< HEAD
function nameInTree(tree) {
=======
function printName(tree) {
>>>>>>> dd6fe7ccb2dd0c60b25596f08db055623bcd389d
    if (tree.descendents === null) {
        console.log("name:", tree.value)
    }
    else {
        
        console.log("name:", tree.value)
        for (let child of tree.descendents) {
<<<<<<< HEAD
            nameInTree(child)
=======
            printName(child)
>>>>>>> dd6fe7ccb2dd0c60b25596f08db055623bcd389d
        }
    }
}
 
<<<<<<< HEAD
console.log(nameInTree(abe));
=======
console.log(printName(abe));
>>>>>>> dd6fe7ccb2dd0c60b25596f08db055623bcd389d

//Question 2
function contains(tree,name){
    if(tree.value===name)
        return true;
    if(tree.descendents && tree.descendents.length>0){
<<<<<<< HEAD
        for(let node of tree.descendents){
           if(contains(node,name))
=======
        for(let item of tree.descendents){
           if(contains(item,name))
>>>>>>> dd6fe7ccb2dd0c60b25596f08db055623bcd389d
               return true;
        }
    }
   return false;
}

console.log( contains(abe,"lisa"));

//Question 3
function getMatchingTree(tree,name){
    if(tree.value===name){
        return tree;
    }
    if(tree.descendents && tree.descendents.length>0){
        for(let item of tree.descendents){
           let matchingNode = getMatchingTree(item,name);
           if(matchingNode){
                return matchingNode; 
           }
        }
    }
    return null;
}
console.log("getMatchingTree ",getMatchingTree(abe,"Homer"));
//  Question 4 Create a new constructor function ListNode (based on TreeNode below) and use it to generate a 
// linked list of Abe, Homer, Bart, Lisa, Maggie instead of a tree.

function ListNode(value,next){
    this.value = value;
   
}
<<<<<<< HEAD
let lisNode = new ListNode(abe.value)
let maggieNode = new ListNode("Maggie",null);
let lisaNode = new ListNode("Lisa",maggieNode);
let bartNode = new ListNode("Bart",lisaNode);
let homerNode = new ListNode("Homer",bartNode);
let abeNode =  new ListNode("Abe",homerNode);
=======
// let lisNode = new ListNode(abe.value)
// let maggieNode = new ListNode("Maggie",null);
// let lisaNode = new ListNode("Lisa",maggieNode);
// let bartNode = new ListNode("Bart",lisaNode);
// let homerNode = new ListNode("Homer",bartNode);
// let abeNode =  new ListNode("Abe",homerNode);
>>>>>>> dd6fe7ccb2dd0c60b25596f08db055623bcd389d


function createlinkedList(abe){
    
let listNode = new ListNode(abe.value);

listNode.next = new ListNode(homer.value);
listNode.next.next = new ListNode(bart.value);
listNode.next.next.next = new ListNode(lisa.value);
listNode.next.next.next.next = new ListNode(maggie.value);
console.log(JSON.stringify(listNode));
}
createlinkedList(abe);

//question 5
function targetValue(tree, name) {
    if (tree.value === name) {
        console.log(tree);
    }
    if (tree.descendents === null) return;
    tree.descendents.forEach(child => targetValue(child, name));
}
 
let nameValue = "Abe";
targetValue(abe, nameValue);

//Question 6


function treeModifier(tree, func) {
        tree.value = func(tree);
        if (tree.descendents === null) {
     
            return tree;
        } else {
            tree.value = func(tree);
            for (let node of tree.descendents) {
     
                treeModifier(node, func);
     
            }
        }
        return tree
    }
     
<<<<<<< HEAD
    function allCaps(node) {
       console.log(node.value = node.value.toUpperCase());
    }
    function addStars(node) {
        console.log("***" + node.value + "***");
    }
    function reverseNode(node) {
        console.log(node.value.split("").reverse().join(""));
    }
    treeModifier(abe, allCaps); //Cannot read property 'toUpperCase' of undefined
    treeModifier(abe, addStars);
    treeModifier(abe, reverseNode); //Cannot read property 'split' of undefined

     //Question 9
    function addNumbers(...arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
     
    let total = addNumbers(3, 2, 4, 6);
    console.log(total);
     
    // rest in destructuring assignment.
     
    let [num1, num2, ...rest] = [10, 20, 30, 40];
     
    console.log(rest) 
=======
    // function allCaps(node) {
    //    console.log(node.value = node.value.toUpperCase());
    // }
    function addStars(node) {
        console.log("***" + node.value + "***");
    }
    // function reverseNode(node) {
    //     console.log(node.value.split("").reverse().join(""));
    // }
    //treeModifier(abe, allCaps); //Cannot read property 'toUpperCase' of undefined
    treeModifier(abe, addStars);
    //treeModifier(abe, reverseNode); //Cannot read property 'split' of undefined
>>>>>>> dd6fe7ccb2dd0c60b25596f08db055623bcd389d
    
    

