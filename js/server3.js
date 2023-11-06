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
