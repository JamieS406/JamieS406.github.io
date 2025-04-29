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
//Picture-in-Picture button function:
//fetching PiP button
const PipButton = document.querySelector("#PipButton");

PipButton.addEventListener("click", OpenPip);
console.log(PipButton);

//If the Picture in Picture(PiP) is not enabled, pressing the PiP icon will enable/open PiP window.
function OpenPip() {
  if (document.pictureInPictureEnabled) {
    video.requestPictureInPicture();
    //If the Picture in Picture(PiP) is open, pressing the PiP icon will exit/close PiP window.
  } else if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
  }
}

//Ask if it's okay if I change the playhead thing so i can have timestamps

//METHOD 1 Proof-of-concept: EventListener Method
//As learnt in class
//fetching step1 button
const a2_step1Button = document.querySelector("#AstepOne");
const step1Button = document.querySelector("#stepOne");

//listen for click on that button
a2_step1Button.addEventListener("click", oneStamp);
console.log(AstepOne);

step1Button.addEventListener("click", oneStamp);
console.log(stepOne);

function oneStamp() {
  video.play();
  video.currentTime = 29;
}
//__________________________________________
//METHOD 2: "On Click" Method
//I used this method as it reduces the lines of code I need for the same function on different timestamps.
//I'm aware this puts a functionality into HTML, which should be purely for base format
//However I feel this method makes sense for my website, as I have a lot of repeating buttons,
//Which could make a simple instruction very clunky.

//sending function name to console
console.log(timeStamp);

//function applied to all timestampped events (all Step buttons); appropriate timestamps are listed
//in the "onclick" section of the designated steps, eg. StepTwo's timestamp(42) in seconds.
function timeStamp(seconds) {
  video.play();
  video.currentTime = seconds;
}
