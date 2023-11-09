// JavaScript parentNode
// let paper = document.querySelector('.paper');
// console.log(paper.parentNode);  
// // ouput:<div id="main"> its contents, 'div' is parent node.

// // Get the first child element
// let content = document.getElementById('menu');
//  console.log(content.firstChild.nodeName);
// console.log(content.lastElementChild);  `-->Get the last child element`
// console.log(content.children) `-->Get all child elements`

// // Get the next siblings
// let current = document.querySelector('.current');
// let nextSibling = current.nextElementSibling;
// // To get the next sibling of an element, you use the nextElementSibling attribute
// console.log(nextSibling);

// get all the next siblings of an element
// let current = document.querySelector('.current');
// let nextSibling = current.nextElementSibling;
// console.log(nextSibling);

// while(nextSibling) {
//     console.log(nextSibling);
//     nextSibling = nextSibling.nextElementSibling;
// }

// Get the previous siblings
// let current = document.querySelector('.current');
// let prevSiblings = current.previousElementSibling;

// console.log(prevSiblings);

// // selects all the previous siblings of the list item
let current = document.querySelector('.current');
let prevSibling = current.previousElementSibling;
while(prevSibling) {
    console.log(prevSibling);
    prevSibling = current.previousElementSibling;
}

// Get all siblings of an element
// let current = document.querySelector(".current");
// let sibblings = [];
// let prevSib = current.previousElementSibling;
// while (prevSib) {
//     sibblings.push(prevSib)
//     prevSib = prevSib.previousElementSibling
// }
// sibblings.reverse();
// let nextSib = current.nextElementSibling;
// while (nextSib) {
//     sibblings.push(nextSib)
//     nextSib = nextSib.nextElementSibling
// }
// console.log(sibblings.map(e => e.innerHTML));


