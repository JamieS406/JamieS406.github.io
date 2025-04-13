function checkWeather() {
  let body = document.querySelector("body");
  let outer = document.querySelector(".outer");
  console.log("I am just being clicked");
  let myTemp = document.querySelector("#myTemp");
  let temp = myTemp.value;
  console.log("current temp is", temp);

  if (myTemp.value < 10) {
    console.log("It is freezing");
    body.style.backgroundColor = "aqua";
    outer.style.backgroundColor = "aliceblue";
  } else if (myTemp.value >= 10 && myTemp.value < 30) {
    console.log("it is pleasant weather");
    body.style.backgroundColor = "azure";
    outer.style.backgroundColor = "yellow";
  } else if (myTemp.value >= 30) {
    console.log("it is boiling outside");
    body.style.backgroundColor = "coral";
    outer.style.backgroundColor = "crimson";
  }
}
