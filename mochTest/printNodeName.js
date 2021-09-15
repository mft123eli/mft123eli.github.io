let node4 = {
    name: "label",
    value: "Name",
    children: null
};
 
let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
};
 
let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
};
 
let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
};
 
let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
};
function findListNode(node, target) {
   
    if (node.children === null) {
        if (node.name === target) {
            return node;
        } else {
            return null;
        }
    } else { 
        let childResult = null;
        if (node.name === target) {
            return node;
        }
        for (let child of node.children) {
            childResult = findListNode(child, target);
            if (childResult !== null) {
                return childResult;
            }
        }
        return null;  
    }
}
 
console.log(findListNode(node1, "div"));