
const p = document.getElementById("message");
console.log(p) 
// we get output as "A paragraph"
// getElementByName
let btn = document.getElementById('btnRate');
// here button is connected by id "btnRate"
        let output = document.getElementById('output');
// here we use getElementById to display the output 
        btn.addEventListener('click', () => {
            let rates = document.getElementsByName('rate');
            rates.forEach((rate) => {
                if (rate.checked) {
                    output.innerText = `You selected: ${rate.value}`;
                }
            });

        });
        // here we  use addeventlistener to initiate the event of button press and  get a statement depicting the rating we select

        // getElementByTagName
        let btn2 = document.getElementById("btn");
        btn2.addEventListener('click',()=>{
            let heading = document.getElementsByTagName("h2")
            alert(`The total number of H2 headings are : ${heading.length}`)
        })
// here we get the pop up alert giving us the number of h2 headings in our HTML page