const cardIcons = document.querySelector(".card__icon");

cardIcons.addEventListener("click", () => {
  cardIcons.classList.toggle("card__icon--marked");
});

// cardIcons.addEventListener("click", () => {
//   cardIcons.forEach((icon) => {
//     icon.classList.toggle("card__icon--marked");
//   });
// });
