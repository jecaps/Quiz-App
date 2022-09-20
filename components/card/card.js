export function toggleBookmark() {
  const bookmarks = document.querySelectorAll("[data-js='bookmark']");

  bookmarks.forEach((bookmark) => {
    bookmark.addEventListener("click", () => {
      bookmark.classList.toggle("card__bookmark--marked");
    });
  });
}

export function toggleAnswer() {
  const cardElements = document.querySelectorAll(".card");

  cardElements.forEach((card) => {
    const answerButton = card.querySelector(".card__btn");
    const answer = card.querySelector(".card__answer");

    answerButton.addEventListener("click", () => {
      answer.classList.toggle("card__answer--shown");
      answerButton.textContent === "Show Answer"
        ? (answerButton.textContent = "Hide Answer")
        : (answerButton.textContent = "Show Answer");
    });
  });
}
