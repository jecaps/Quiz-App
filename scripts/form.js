const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');
const button = document.querySelector("button");
const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");
const questionCharIndicator = document.getElementById(
  "question-char-indicator"
);
const answerCharIndicator = document.getElementById("answer-char-indicator");

// Handles color of questionCharIndicator and answerCharIndicator

const charIndicatorHandler = (input, indicator) => {
  const maxLength = input.maxLength;
  const inputTextLength = input.value.length;
  const charsLeft = maxLength - inputTextLength;

  indicator.textContent = `${charsLeft} characters left`;

  charsLeft === 0
    ? (indicator.style.color = "#ff312e")
    : charsLeft >= 1 && charsLeft <= 20
    ? (indicator.style.color = "#ff9505")
    : (indicator.style.color = "#1c572a");
};

questionInput.addEventListener("input", () => {
  charIndicatorHandler(questionInput, questionCharIndicator);
});
answerInput.addEventListener("input", () => {
  charIndicatorHandler(answerInput, answerCharIndicator);
});

// Handles form when submitting

const submitHandler = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  createCard(data);

  questionInput.value = "";
  answerInput.value = "";

  questionCharIndicator.textContent = "";
  answerCharIndicator.textContent = "";

  form.reset();
  event.target.elements.question.focus();
};

// Creates html for card
const createCard = (dataObject) => {
  const card = document.createElement("div");
  const cardQuestion = document.createElement("p");
  const cardButton = document.createElement("a");
  const cardAnswer = document.createElement("p");
  const cardCategory = document.createElement("ul");

  card.classList.add("card");
  card.innerHTML = `
  <svg class="card__bookmark" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25"
  viewBox="0 0 30 30">
  <path d="M23,27l-8-7l-8,7V5c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V27z">
  </path>
  </svg>
  `;

  cardQuestion.classList.add("card__question");
  cardQuestion.textContent = dataObject.question;

  cardButton.classList.add("card__btn");
  cardButton.textContent = "Show Answer";

  cardAnswer.classList.add("card__answer");
  cardAnswer.textContent = dataObject.answer;

  cardCategory.classList.add("card__category");
  cardCategory.innerHTML = `
  <li class="card__item">${dataObject.tags}</li>
  `;

  card.append(cardQuestion);
  card.append(cardButton);
  card.append(cardAnswer);
  card.append(cardCategory);
  main.append(card);
};

form.addEventListener("submit", submitHandler);
