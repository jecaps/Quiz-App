import { toggleBookmark, toggleAnswer } from "./components/card/card.js";

function handleSubmit() {
  const form = document.querySelector('[data-js="form"]');

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    createCard(data);
    event.target.reset();
    event.target.elements.question.focus();
  });
}

// function toggleBookmark() {
//   const bookmarks = document.querySelectorAll("[data-js='bookmark']");

//   bookmarks.forEach((bookmark) => {
//     bookmark.addEventListener("click", () => {
//       bookmark.classList.toggle("card__bookmark--marked");
//     });
//   });
// }

function countCharactersLeft() {
  const questionInput = document.getElementById("question");
  const answerInput = document.getElementById("answer");
  const questionCharIndicator = document.getElementById(
    "question-char-indicator"
  );
  const answerCharIndicator = document.getElementById("answer-char-indicator");

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
}

// function toggleAnswer() {
//   const cardElements = document.querySelectorAll(".card");

//   cardElements.forEach((card) => {
//     const answerButton = card.querySelector(".card__btn");
//     const answer = card.querySelector(".card__answer");

//     answerButton.addEventListener("click", () => {
//       answer.classList.toggle("card__answer--shown");
//       answerButton.textContent === "Show Answer"
//         ? (answerButton.textContent = "Hide Answer")
//         : (answerButton.textContent = "Show Answer");
//     });
//   });
// }

const createCard = (dataObject) => {
  const cardList = document.querySelector('[data-js="form-card-list"]');

  const listItem = document.createElement("li");
  listItem.setAttribute("class", "form__card-list-item");

  const article = document.createElement("article");
  article.setAttribute("class", "card");
  article.setAttribute("data-js", "card");
  article.innerHTML = `
  <svg class="card__bookmark" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25"
  viewBox="0 0 30 30">
  <path d="M23,27l-8-7l-8,7V5c0-1.105,0.895-2,2-2h12c1.105,0,2,0.895,2,2V27z">
  </path>
  </svg>
  `;

  const cardQuestion = document.createElement("p");
  cardQuestion.classList.add("card__question");
  cardQuestion.textContent = dataObject.question;
  article.append(cardQuestion);

  const cardButton = document.createElement("a");
  cardButton.classList.add("card__btn");
  cardButton.textContent = "Show Answer";
  article.append(cardButton);

  const cardAnswer = document.createElement("p");
  cardAnswer.classList.add("card__answer");
  cardAnswer.textContent = dataObject.answer;
  article.append(cardAnswer);

  const cardCategory = document.createElement("ul");
  cardCategory.classList.add("card__category");
  cardCategory.innerHTML = `
  <li class="card__item">${dataObject.tags}</li>
  `;

  listItem.append(article);
  cardList.append(listItem);

  toggleAnswer();
  toggleBookmark();
  countCharactersLeft();
};

toggleBookmark();
toggleAnswer();
handleSubmit();
countCharactersLeft();
