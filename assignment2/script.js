const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}
// Add other functionalities here

//Picture-in-Picture button function
const PipButton = document.querySelector("#PipButton");

PipButton.addEventListener("click", OpenPip);
console.log(PipButton);

function OpenPip() {
  if (document.pictureInPictureEnabled) {
    video.requestPictureInPicture();
  } else if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  }
}

//Ask if it's okay if I change the playhead thing so i can have timestamps

//Attempting timestamping
const step1Button = document.querySelector("#stepOne");

step1Button.addEventListener("click", oneStamp);
console.log(stepOne);

function oneStamp() {
  video.currentTime = 29;
}

const step2Button = document.querySelector(".stepTwo");

step2Button.addEventListener("click", twoStamp);
console.log(stepTwo);

function twoStamp() {
  video.currentTime = 42;
}

const step3Button = document.querySelector("#stepThree");

step3Button.addEventListener("click", threeStamp);
console.log(stepThree);

function threeStamp() {
  video.currentTime = 53;
}

const step4Button = document.querySelector("#stepFour");

step4Button.addEventListener("click", fourStamp);
console.log(stepFour);

function fourStamp() {
  video.currentTime = 81;
}
