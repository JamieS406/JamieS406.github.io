let myButton = document.querySelector("#my-button");
console.log(myButton);
myButton.addEventListener("click", toggleMe);
let helloMsg = document.querySelector("#hello");
let course = "oof";

let myImg = document.querySelector("#myCat");
console.log(myCat);

myImg.addEventListener("mouseenter", addMe);
myImg.addEventListener("mouseleave", removeMe);

function addMe() {
  myImg.classList.add("round");
}

function removeMe() {
  myImg.classList.remove("round");
}
function toggleMe() {
  let myName = myImg.dataset.catname;
  helloMsg.textContent = "Hi I am" + myName;
  myImg.classList.toggle("round");
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
// topHeading.style.color = "forestgreen";

//make sure you put "querySelectorAll"; if bottom is all then the top must be or else it'll get confused and stall, not work
let allParas = document.querySelectorAll("p");
console.log(allParas);
for (let i = 0; i < allParas.length; i++) {
  //   console.log(allParas[i].textContent);
  allParas[i].style.border = "2px solid brown";
  allParas[i].style.backgroundColor = "blue";
}
const sh1 = document.querySelector("#first-subheading");
// console.log(sh1);
// console.log(sh1.textContent);
const blue1 = document.querySelectorAll(".blue-color");
// console.log(blue1);

constallSubHeadings = document.querySelectorAll("h2");
// console.log(allSubHeadings);
