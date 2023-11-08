
// console.log("Welcome to Neoito")

// JavaScript getElementById() method example
// const p = document.getElementById("message");
// console.log(p);
// // Output:<p id="message">A paragraph</p>

// // JavaScript getElementsByName() method
// let btn = document.getElementById("btnRate");
// // here button is connected by id "btnRate"
// let output = document.getElementById("output");
// here we use getElementById to display the output
// // btn.addEventListener("click", () => {
//   let rates = document.getElementsByName("rate");
//   rates.forEach((rate) => {
//     if (rate.checked) {
//       output.innerText = `You selected: ${rate.value}`;
//     }
//   });
// });
// here we  use addeventlistener to initiate the event of button press and  get a statement depicting the rating we select

// JavaScript getElementsByTagName() example
// let btn2 = document.getElementById("btnCount");
// use addeventlistener to initiate the event of button press
// btn2.addEventListener("click", () => {
//   let heading = document.getElementsByTagName("h2");
//   alert(`the number of H2 tags: ${heading.length}`);
// });

// JavaScript getElementsByClassName() on an element example
// method1:using Spread operator
// let menu = document.getElementById("menu");// Get the 'menu' element by its ID
// let items = menu.getElementsByClassName('item');// Get all elements with the class name 'item' within the 'menu' element
// let itemsArray = [...items];// Convert the HTMLCollection into an array for easier manipulation.
// let data = itemsArray.map(i => i.textContent);// Extract the text content of each 'item' element and store it in an array.
// console.log(data);   

// method1:using .call() instead of Spread operator
// let menu = document.getElementById('menu');
// let items = menu.getElementsByClassName('item');

// let data = [].map.call(items, item => item.textContent);

// console.log(data);

// // query Selector
// const firstItem =document.querySelector('.item');
// console.log(firstItem.textContent);

// querySelectorAll()
const items = document.querySelectorAll('.item')
// // Use a "for" loop to iterate through the NodeList, starting from index 0.
for (let i = 0; i < items.length; i++) {
    // Access each item within the NodeList by its index (i) and log its text content to the console.
    console.log(items[i].textContent)
}



console.log("welcome neoito")

