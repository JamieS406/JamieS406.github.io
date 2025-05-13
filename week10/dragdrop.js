const card = document.querySelector(".card");
console.log(card);

card.addEventListener("dragstart", function () {
  draggedCard = card;
  console.log(draggedCard);
});

const dropbox = document.querySelector(".dropbox");
console.log(dropbox);

dropbox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

dropbox.addEventListener("drop", function () {
  const clone = draggedCard;
  clone.addEventListener("click", function () {
    card.classList.toggle("flip");
  });
  //(in this situation "clone" is an arbituary name for the card to the right. although an actual clone is also possible)
  //dropbox.innerHTML = draggedCard;
  //if you want there to be a clone
  dropbox.appendChild(draggedCard);
  draggedCard = null;
});
