const myButton = document.querySelector("#mybutton");

myButton.addEventListener("click", moveBell);

const bell = document.querySelector("#bell");
let count = 0;

function moveBell() {
  bell.classList.add("bellanimation");

  // if (!clicked) {
  //   bell.classList.add("bellanimation");
  //   clicked = true;
  // } else {
  //   myInput.style.translate = "0px 0px";
  //   clicked = false;
  // }

  // if (count === 0) {
  //   console.log("movebell");
  //   bell.classList.add("bellanimation");
  //   count = 1;
  // } else {
  //   bell.classList.add("bellanimation");
  //   count = 2;
  // }
  //   bell.style.transform = "translateY(-300px)";
}
