
const p = document.getElementById("message");
console.log(p) 
// we get output as "A paragraph"
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