// console.log("Welcome to Neoito")

// JavaScript getElementById() method example
const p = document.getElementById('message');
console.log(p);
// Output:<p id="message">A paragraph</p>

// JavaScript getElementsByName() method
let btn = document.getElementById('btnRate');
let output = document.getElementById('output');

btn.addEventListener('click', () => {
    let rates = document.getElementsByName('rate');
    rates.forEach((rate) => {
        if (rate.checked) {
            output.innerText = `You selected: ${rate.value}`;
        }
    });

});