// to create a new <div> element:
let div = document.createElement('div');

// Adding an id to the div
div.id="content"
// Adding a class to the div
div.className="note"
// add an HTML snippet to the div
div.innerHTML = '<p>createElement example </p>'
// Adding text to a div
let text =document.createTextNode('createElemet example');
// // create a new heading and add it to the div
let h2 = document.createElement('h2');
h2.textContent = 'Add h2 element to div';
div.appendChild(h2);
document.body.appendChild(div);

// Creating new list items (li) example
// let li = document.createElement('li');
// li.textContent = 'products';
// menu.appendChild(li);

// li=document.createElement('li')
// li.textContent = 'About Us';
// menu.appendChild(li);

// const menu = document.querySelector('#menu');
// menu.appendChild(li);


// Creating new list items (ul,li) example
let ul = document.createElement('ul');
ul.id = "cars"
let li1 = document.createElement('li');
li1.textContent='TATA'
ul.appendChild(li1)
let li2 = document.createElement('li');
li2.textContent='Ford'
ul.appendChild(li2)
document.body.appendChild(ul);


