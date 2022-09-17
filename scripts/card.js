const bookmarks = document.querySelectorAll("[data-js='bookmark']");
const answerBtn = document.querySelector(".card__btn");
const answerText = document.querySelector(".card__answer");

// Changes bookmarks color when clicked
bookmarks.forEach((bookmark) => {
  bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("card__bookmark--marked");
  });
});

// Changes button text and visibility of answer text when clicked

const answerBtnHandler = () => {
  answerText.classList.toggle("card__answer--shown");
  answerBtn.textContent === "Show Answer"
    ? (answerBtn.textContent = "Hide Answer")
    : (answerBtn.textContent = "Show Answer");
};

answerBtn.addEventListener("click", answerBtnHandler);
