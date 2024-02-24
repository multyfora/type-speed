const quotesElement = document.querySelectorAll(".title");
const output = document.querySelector(".output");

let quotesArray = [];

for (let i = 0; i < quotesElement.length; i++) {
  quotesArray[i] = quotesElement[i].textContent;
}

output.innerHTML = JSON.stringify(quotesArray);