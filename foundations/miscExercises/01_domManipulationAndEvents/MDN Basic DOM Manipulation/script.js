// Selects the 'a' anchor tag and creates a reference to it
const link = document.querySelector("a");

// Update the link using JS
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

// Select the 'section' tag and create a reference to it
const sect = document.querySelector("section");

// Create a new paragraph element using JS
// and populate it with information, finally
// appending the paragraph as a child to the
// section node earlier defined
const para = document.createElement("p");
para.textContent = "We hoped you enjoyed the ride.";
para.style.color = "Red";
sect.appendChild(para);

// Update the para with new text information using TextNodes
const text = document.createTextNode(
  " — the premier source for web development knowledge.",
);
const linkPara = document.querySelector("p");
linkPara.appendChild(text);

// Remove the para node we added earlier
// sect.removeChild(linkPara);