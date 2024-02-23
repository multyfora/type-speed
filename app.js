const typeSpace = document.querySelector(".type-space");
const clear = document.querySelector(".clear");
const card = document.querySelector(".card");
const targetTextElement = document.querySelector(".target-text");
const score = document.querySelector(".score-value");

var text = [];
var scoreValue = 0;

var targetText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ullam veniam mollitia perspiciatis explicabo placeat. Voluptas, nulla asperiores esse numquam labore iste quo cumque adipisci assumenda, nihil quidem, dicta nesciunt.";
var targetTextArray = targetText.split("");
console.log(targetTextArray);
const placeholder = "start typing...";

var targetTextHtml = [];

window.onload = () => {
  typeSpace.innerHTML = placeholder;

  for (let i = 0; i < targetTextArray.length; i++) {
    targetTextHtml.push(`<span class="neutral">${targetText[i]}</span>`);
  }
  targetTextElement.innerHTML = targetTextHtml.join("");
};

window.onkeydown = function (e) {
  typingSolver(e);
};

clear.onclick = function () {
  text = [];
  typeSpace.innerHTML = placeholder;

  for (let i = 0; i < targetTextArray.length; i++) {
    targetTextHtml[i] = `<span class="neutral">${targetTextArray[i]}</span>`;
  }
  targetTextElement.innerHTML = targetTextHtml.join("");
};

function typingSolver(e) {
  ifDeletingText(e);

  ifTypingText(e);

  ifEmptyText(e);

  console.log(text);
}

function ifDeletingText(e) {
    //FIXME: This should add score if deleting wrong text and decrease score when deleting right one.
  if (e.key === "Backspace") {
    if (text.length > 0) {
      scoreValue--;
      score.innerHTML = scoreValue;
    }
    text.pop();
    typeSpace.innerHTML = text.join("");
    correctDelete();
  }
}

function ifTypingText(e) {
  if (e.key.length == 1) {
    console.log("key: ", e.key);
    text.push(e.key);
    typeSpace.innerHTML = text.join("");
    correctCheck();
  }
}

function ifEmptyText(e) {
  if (text.length == 0) {
    typeSpace.innerHTML = placeholder;
  }
}

function correctCheck() {
  if (text[text.length - 1] == targetTextArray[text.length - 1]) {
    targetTextHtml[text.length - 1] = `<span class="right">${
      text[text.length - 1]
    }</span>`;
    scoreValue++;
  } else {
    targetTextHtml[text.length - 1] = `<span class="wrong">${
      text[text.length - 1]
    }</span>`;
    scoreValue--;
  }

  targetTextElement.innerHTML = targetTextHtml.join("");
  score.innerHTML = scoreValue;
  console.log(targetTextElement);
}

function correctDelete() {
  targetTextHtml[text.length] = `<span class="neutral">${
    targetTextArray[text.length]
  }</span>`;

  targetTextElement.innerHTML = targetTextHtml.join("");
}
