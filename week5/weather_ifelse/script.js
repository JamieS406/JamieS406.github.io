function checkWeather() {
  const myTemp = document.querySelector("#myTemp");
  console.log(myTemp.value);
  const body = document.querySelector("body");
  const outer = document.querySelector("outer");

  if (myTemp.value < 10) {
    console.log("It is freezing");
    body.style.backgroundColor = "aqua";
    outer.style.backgroundColor = "gray";
  } else if (myTemp.value >= 10 && myTemp.value < 30) {
    console.log("it is pleasant weather");
    body.style.backgroundColor = "azure";
    outer.style.backgroundColor = "lemon";
  } else if (myTemp.value >= 30) {
    console.log("it is boiling outside");
    body.style.backgroundColor = "coral";
    outer.style.backgroundColor = "crimson";
  }
}
