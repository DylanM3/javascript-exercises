// Create a reference to the container
const container = document.querySelector("#container");

// 1: A <p> with red text that says "Hey, I'm red!"
const redPara = document.createElement("p");
redPara.textContent = "Hey, I'm red!";
redPara.style.color = "red";
container.appendChild(redPara);

// 2: A <h3> with blue text that says “I’m a blue h3!”
const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = "blue";
container.appendChild(blueH3);

// 3: a <div> with a black border and pink background
//    colour with the following elements inside of it:
//    1: another <h1> that says “I’m in a div”
//    2: a <p> that says “ME TOO!”
const newDiv = document.createElement("div");
newDiv.style.border = "3px solid black";
newDiv.style.backgroundColor = "pink";
newDiv.id = 'newDiv';
container.appendChild(newDiv); // Append to container

// Create content for new div
const h1Div = document.createElement("h1");
const pDiv = document.createElement("p");
h1Div.textContent = "I'm in a div";
pDiv.textContent = "ME TOO!"

// Apply content into new div
newDiv.appendChild(h1Div);
newDiv.appendChild(pDiv);
