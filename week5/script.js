// // string variables = use quotes
// let myName = "Jamie";
// let myID = "s12345";
// let myCity = "Perth";

// //number variables
// let num = 30;
// let num2 = parseInt("40");
// let sum = num + num2;
// console.log("total is", sum);

// + for addition as well as joining text
//-b for subtraction
// * for multipliayion
// / division

// const weather = "rainy";
// const grade = 75;
//_________

let a = 120;
let b = 80;

function add(val1, val2) {
  let sum = val1 + val2;
  // console.log(sum);
  return sum;
}
function subtract(val1, val2) {
  let c = val1 - val2;
  return c;
}

function whatIsMyGrade(marks) {
  if (marks < 40) {
    console.log("sorry you failed");
    return "failed";
  } else if (marks > 80) {
    // console.log("You got HD");
    return "HD";
  } else {
    return "pass";
  }
}

let myMarks = 54;
let myGrade = whatIsMyGrade(myMarks);
console.log(myGrade);
let total = add(10, 20);
console.log(total);
total = subtract(a, b);
console.log(total);

//___________

// a = 23;
// b=17;
// c=a+b;
// cpmsp;e/log(c);

let grade = 40;
if (grade >= 75) {
  console.log("I got distinction");
} else {
  console.log("I failed the class");
}
const msg = `<h1> Today's weather is ${weather}
<p> it is so nice to see the sun again </p>

</h1>`;

//boolean variables - true or false
letThisEvening = false;
let isThisRmit = true;

//object variables {name/:values, name: value}
const myStudentDetails = {
  name: "Jamie",
  id: 1234,
  homeTown: "melbourne",
};
//back inverted commas "`" is to use html functions within Javascript
let myDetails = `<h1> my name is Jamie</h1>`;

console.log("hi");
console.log("what are we doing here");
//I'm declaring a variable myName to contain my name

console.log("Hi, I am", myName);
//if there isn't an "s", you can just type the numbers w/o the inverted commas

console.log("My student ID is", myID);
myName = "abcd";
console.log("Hi, I am", myName);
//let myNewName = prompt("What is your name");
let myNewName = "Melbourne";

console.log("Hello", myNewName);

console.log("Hello", myNewName, myCity);
//if you know the value is not going to change, define it using "const"
// or else use "let"
//Variables: use smaller case first

// let a = 30;
// {
//   let a = 10;
//   console.log("Hello", a);
// }
// console.log("Hello", a);

// // let array = [2, 4, 6, 8, 10];
// // let student1 = "Jamie";
// // let student2 = "roger";
// // console.log(student1, student2);
// let studentArray = ["Jamie", "roger", "Sarah", "Julia", "janice", "Lucy"];
// // console.log("hello",studentArray[2]);
// // console.log("hello", studentArray[4]);
// // console.log("hello",studentArray[0]);

// for (let i = 0; i < studentArray.length; i++) {
//   console.log("HELLO", studentArray[i]);
