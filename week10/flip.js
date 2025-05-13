const card = document.querySelector(".card");
console.log(card);

// card.addEventListener("mouseover", flipMe);

// function flipMe() {
//   card.classList.add("flip");
// }

// card.addEventListener("mouseout", flipMeBack);

// function flipMeBack() {
//   card.classList.toggle("flip");
// }

card.addEventListener("click", function () {
  card.classList.toggle("flip");
});
//putting function "in-line" like that shown above is to make that one function
//unique to only that event: like id-fying the function to that event.
//if you would want a function to be applied to multiple instances then better to put it outside.

//better for if there are multiple events happening in your scene
