// parentNode
let doc = document.querySelector(".parent");
console.log(doc.parentNode.childNodes); `---> this will provide us complete div element as, nodetype is 'div'  and it is parent node `

// Childnode
let teams = document.getElementById("main");
console.log(teams.firstChild) `---> this provides us text as it depicts empty space between ul and li element`
console.log(teams.firstElementChild)`--> so in order to access first element we need to use firstelementchild `
 console.log(teams.lastElementChild);`--> so in order to access last element we need to use lastelementchild `
console.log(teams.children);`--> so in order to access all the child we need to use children `

// sibblingNode

let nextsib = current.nextElementSibling;
while(nextsib){
    console.log(nextsib)
    nextsib = nextSib.nextElementSibling
}

let prevsib = current.previousElementSibling;
while(prevsib){
    console.log(prevsib)
    prevsib = prevsib.previousElementSibling
}
let current = document.querySelector(".current");
let sibblings = [];
let prevSib = current.previousElementSibling;
while(prevSib){
    sibblings.push(prevSib)
    prevSib = prevSib.previousElementSibling
}
sibblings.reverse();
let nextSib = current.nextElementSibling;
while(nextSib){
    sibblings.push(nextSib)
    nextSib = nextSib.nextElementSibling
}
console.log(sibblings.map(e=>e.innerHTML));