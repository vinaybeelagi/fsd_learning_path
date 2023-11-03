
// const p = document.getElementById("message");
// console.log(p) 
// // we get output as "A paragraph"
// // getElementByName
// let btn = document.getElementById('btnRate');
// // here button is connected by id "btnRate"
//         let output = document.getElementById('output');
// // here we use getElementById to display the output 
//         btn.addEventListener('click', () => {
//             let rates = document.getElementsByName('rate');
//             rates.forEach((rate) => {
//                 if (rate.checked) {
//                     output.innerText = `You selected: ${rate.value}`;
//                 }
//             });

//         });
//         // here we  use addeventlistener to initiate the event of button press and  get a statement depicting the rating we select

//         // getElementByTagName
//         let btn2 = document.getElementById("btn");
//         btn2.addEventListener('click',()=>{
//             let heading = document.getElementsByTagName("h2")
//             alert(`The total number of H2 headings are : ${heading.length}`)
//         })
// here we get the pop up alert giving us the number of h2 headings in our HTML page

// getElementsByClassNAme
// let menu = document.getElementById("menu");
// let items = menu.getElementsByClassName('items'); `--> This will provide us items in form of HTML collection `
// let itemsArray = [...items];`---> this will convert HTML collection to array`

// let data = itemsArray.map(i => i.textContent);`---> here we can use map to iterate over all the text elements `

// console.log(data);

// querryselector method

const firstEle = document.querySelector(".items");
console.log(firstEle.textContent);`---> here we get the first element from the list as it matches all the items but returns only first item`


