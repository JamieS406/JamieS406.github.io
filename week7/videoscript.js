const topHeading = document.querySelector("#top-heading");
console.log(topHeading);

let myNewHeading = "";

//TO FIGURE OUT: how to make the words above change upon play/pause button

const starVideo = document.querySelector("#star-video");
console.log(starVideo);

//my logic for playing sound:
const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playVideo);

function playVideo() {
  myNewHeading = "Video is currently playing...";
  starVideo.play();
  topHeading.textContent = myNewHeading;
}

//________________________________

//my logic for pausing sound:
const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseVideo);

function pauseVideo() {
  myNewHeading = "Video is paused";
  starVideo.pause();
  topHeading.textContent = myNewHeading;
}
