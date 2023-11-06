// Efficient way using DocumentFragment to add multiple list items
const ul = document.getElementById("myList");
const fragment = document.createDocumentFragment(); // Create a DocumentFragment

for (let i = 0; i < 100; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + (i + 1);
    fragment.appendChild(li); // Append the list items to the DocumentFragment
}

ul.appendChild(fragment); // Append the DocumentFragment to the DOM in one operation