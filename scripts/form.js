const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');
const button = document.querySelector("button");

const submitHandler = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  createCard(data);

  console.log(data);
  form.reset();
  event.target.elements.question.focus();
};

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
