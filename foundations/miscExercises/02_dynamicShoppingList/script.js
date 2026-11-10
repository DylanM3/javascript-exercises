// Create references to the required elements
const ulVar = document.querySelector("ul");
let inputVar = document.querySelector("input");
const btnVar = document.querySelector("button");

function addItem(event) {
    // Prevent page from refreshing on form submission
    event.preventDefault();

    // Transfer input to safe variable and reset for next use
    let currentInput = inputVar.value;
    inputVar.value = "";

    // Create new elements
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    newSpan.classList.add("shopping-list-item");
    const items = document.querySelectorAll(".shopping-list-item");
    const identifier = items.length + 1;

    newLi.id = `list-item-${identifier}`
    const newBtn = document.createElement("button");
    newBtn.addEventListener("click", () => {
        document.getElementById(`list-item-${identifier}`).remove();
    })

    // Append span and button as children of the <li>
    newLi.appendChild(newSpan);
    newLi.appendChild(newBtn);

    newSpan.textContent = currentInput;
    newBtn.textContent = "Delete";

    ulVar.append(newLi);
}

btnVar.addEventListener("click", addItem);
