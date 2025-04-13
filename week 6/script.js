const myButton = document.querySelector("#my-button");
console.log(myButton);
myButton.addEventListener("click", toggleMe);

let course = "oof";

const myCat = document.querySelector("#my-cat");
console.log(myCat);

myCat.addEventListener("mouseenter", addMe);
myCat.addEventListener("mouseleave", removeMe);

function addMe() {
  myCat.classList.add("round");
}

function removeMe() {
  myCat.classList.remove("round");
}
function toggleMe() {
  let myCat = myCat.dataset.catname;
  helloMsg.textContent = "Hi I am" + myCat;
  myCat.classList.toggle("round");
}

// function handleClick() {
//     console.log("did you just click me?");
// const header = document.querySelector("header");
// console.log(header);
// console.log(header.innerHTML);
// header.innerHTML += `<h1>replaced ${course} </h1>`;
// console.log(header.innerHTML);
// const topHeading = document.querySelector("h1");
// console.log(topHeading);
// console.log(topHeading.textContent);
// topHeading.textContent = "This is my new top heading!";
topHeading.style.color = "forestgreen";

//make sure you put "querySelectorAll"; if bottom is all then the top must be or else it'll get confused and stall, not work
const allParas = document.querySelectorAll("p");
console.log(allParas);
for (let i = 0; i < allParas.length; i++) {
  //   console.log(allParas[i].textContent);
  allParas[i].style.border = "2px solid brown";
  allParas[i].style.backgroundColor = "aliceblue";
}
const sh1 = document.querySelector("#first-subheading");
// console.log(sh1);
// console.log(sh1.textContent);
const blue1 = document.querySelectorAll(".blue-color");
// console.log(blue1);

constallSubHeadings = document.querySelectorAll("h2");
// console.log(allSubHeadings);
