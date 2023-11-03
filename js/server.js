// console.log("Welcome to Neoito")

// JavaScript getElementById() method example
const p = document.getElementById("message");
console.log(p);
// Output:<p id="message">A paragraph</p>

// JavaScript getElementsByName() method
let btn = document.getElementById("btnRate");
// here button is connected by id "btnRate"
let output = document.getElementById("output");
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
let btn2 = document.getElementById("btnCount");
// use addeventlistener to initiate the event of button press
btn2.addEventListener("click", () => {
  let heading = document.getElementsByTagName("h2");
  alert(`the number of H2 tags: ${heading.length}`);
});
