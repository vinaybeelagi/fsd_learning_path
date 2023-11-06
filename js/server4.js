// // Efficient way using DocumentFragment to add multiple list items
// const ul = document.getElementById("myList");
// const fragment = document.createDocumentFragment(); // Create a DocumentFragment

// for (let i = 0; i < 100; i++) {
//     const li = document.createElement("li");
//     li.textContent = "Item " + (i + 1);
//     fragment.appendChild(li); // Append the list items to the DocumentFragment
// }

// ul.appendChild(fragment); // Append the DocumentFragment to the DOM in one operation

// let p = document.querySelector(".select");
// let h1 = document.createElement("h1");
// h1.innerText = "Javascript Before Method";
// p.before(h1);

// let ul = document.querySelector("ul");
// const list = ['vue','golang'];
// const items = list.map((i)=>{
//     const item = document.createElement("li");
//     item.innerText = i;
//     return item;
// })
// ul.firstChild.before(...items)

 let p = document.querySelector(".select");
 let h1 = document.createElement("h1");
 h1.innerText = "Javascript Before Method";
 p.after(h1);

// let ul1 = document.querySelector("ul");
// const list1 = ['vue','golang'];
// const items1 = list1.map((i)=>{
//     const item = document.createElement("li");
//     item.innerText = i;
//     return item;
// })
// ul1.lastChild.after(...items1)