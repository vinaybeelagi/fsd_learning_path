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

// Create a new <ul> (unordered list) element
let ul = document.createElement("ul");

// Set the 'id' attribute of the <ul> to "menu"
ul.id = "menu";

// Create a new <li> (list item) element
let li1 = document.createElement("li");

// Set the text content for the first list item
li1.textContent = "Products";

// Append the first list item to the unordered list
ul.appendChild(li1);

// Create a new <li> (list item) element
let li2 = document.createElement("li");

// Set the text content for the second list item
li2.textContent = "Home";

// Append the second list item to the unordered list
ul.appendChild(li2);

// Create a new <li> (list item) element
let li3 = document.createElement("li");

// Set the text content for the third list item
li3.textContent = "About Us";

// Append the third list item to the unordered list
ul.appendChild(li3);

// Append the unordered list to the document body
document.body.appendChild(ul);

// Create a new <ul> (unordered list) element
let ul2 = document.createElement("ul");

// Set the 'id' attribute of the <ul> to "menu"
ul2.id = "cars";

// Create a new <li> (list item) element
let li4 = document.createElement("li");

// Set the text content for the first list item
li4.textContent = "TATA";

// Append the first list item to the unordered list
ul2.appendChild(li4);

// Create a new <li> (list item) element
let li5 = document.createElement("li");

// Set the text content for the second list item
li5.textContent = "Audi";

// Append the second list item to the unordered list
ul2.appendChild(li5);

// Create a new <li> (list item) element
let li6 = document.createElement("li");

// Set the text content for the third list item
li6.textContent = "Ford";

// Append the third list item to the unordered list
ul2.appendChild(li6);

// Append the unordered list to the document body
document.body.appendChild(ul2);

function transferItem() {
    // Remove the first item from the first list
    ul.removeChild(li1);

    // Append the removed item to the second list
    ul2.appendChild(li1);
}

// Call the transferItem function to move an item from the first list to the second list
transferItem();

const element = document.getElementById("note");
 console.log(element.textContent);
// Output: "This is important text."
console.log(element.innerText);

let menu  = document.getElementById("menu");
console.log(menu.innerHTML)


