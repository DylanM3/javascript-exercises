// Create references to the required elements
const ulVar = document.querySelector("ul");
let inputVar = document.querySelector("input");
const btnVar = document.querySelector("button");

function addItem(event) {
    // Prevent page from refreshing on form submission
    event.preventDefault();

    // Transfer input to safe variable and reset for next use
    let currentInput = inputVar.value;

    // Create new elements
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newBtn = document.createElement("button");

    // Append span and button as children of the <li>
    newLi.appendChild(newSpan);
    newLi.appendChild(newBtn);

    newSpan.textContent = currentInput;
    newBtn.textContent = "Delete";

    ulVar.append(newLi);
}

btnVar.addEventListener("click", addItem);