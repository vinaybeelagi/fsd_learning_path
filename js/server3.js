// Create a new <div> element and assign it to the 'div' variable
let div = document.createElement("div");

// Set the 'id' attribute of the <div> to 'content'
div.id = 'content';

// Set the 'class' attribute of the <div> to 'content'
div.className = "content"

// Set the inner HTML of the <div> to contain a <p> element with the text "Creating an element"
div.innerHTML = '<p> Creating an element</p>'

// Create a new text node with the content "CreateElement example"
let text = document.createTextNode('CreateElement example');

// Append the text node to the <div>
div.appendChild(text);

// Create a new <h2> element
let h2 = document.createElement("h2");

// Set the text content of the <h2> element to the string that contains HTML tags
h2.textContent = "<h2>We are understanding the concepts of appending the child element</h2>";

// Append the <h2> element to the <div>
div.appendChild(h2);

// Append the <div> to the document body
document.body.appendChild(div);
