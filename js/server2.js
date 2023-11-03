// JavaScript parentNode
// let paper = document.querySelector('.paper');
// console.log(paper.parentNode);  
// // ouput:<div id="main"> its contents, 'div' is parent node.

// // // Get the first child element
// let content = document.getElementById('menu');
// // console.log(content.firstChild.nodeName);
// // console.log(content.lastElementChild);  `-->Get the last child element`
// console.log(content.children) `-->Get all child elements`

// // Get the next siblings
// let current = document.querySelector('.current');
// let nextSibling = current.nextElementSibling;
// // To get the next sibling of an element, you use the nextElementSibling attribute
// console.log(nextSibling);

// get all the next siblings of an element
let current = document.querySelector('.current');
let nextSibling = current.nextElementSibling;

while(nextSibling) {
    console.log(nextSibling);
    nextSibling = nextSibling.nextElementSibling;
}