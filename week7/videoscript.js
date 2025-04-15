const topHeading = document.querySelector("#top-heading");
console.log(topHeading);

let myNewHeading = "";

//To make the words above change upon play/pause button, NEED to define "myNewHeading" in top heirachy,
//even if theres nothing inside, to ensure that the code knows the function exists

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

//________________________________

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", toggleVideo);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function toggleVideo() {
  if (starVideo.paused || starVideo.ended) {
    starVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  } else {
    starVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  }
}
