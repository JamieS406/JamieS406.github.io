//first fetch media or video file to play
const myVideo = document.querySelector("#my-video");
console.log(myVideo);

myVideo.addEventListener("timeupdate", updateProgressBar);

const progressBar = document.querySelector("#progress-bar");

function updateProgressBar() {
  //find in percentage the amount of the video played
  let progress = (myVideo.currentTime / myVideo.duration) * 100;
  console.log(progress);
  //adjust the width of the progress bar accordingly
  progressBar.style.width = progress + "%";
}

//play pause logic
//fetch the play pause button
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", togglePlay);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function togglePlay() {
  if (myVideo.paused || myVideo.ended) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
    myVideo.play();
  } else {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
    myVideo.pause();
  }
}
//_______________________________________________________________________

//mute unmute logic
//fetch the mute unmute button

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

//listen for click on that button
muteUnmuteButton.addEventListener("click", toggleSound);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");

function toggleSound() {
  if (myVideo.muted) {
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
    myVideo.muted = false;
  } else {
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
    myVideo.muted = true;
  }
}

//_______________________________________________________________________
//fast forward logic

const fastForwardButton = document.querySelector("#fast-forward-button");
console.log(fastForwardButton);

//listen for click on that button
fastForwardButton.addEventListener("click", fastForward);

function fastForward() {
  if ((myVideo.playbackRate = 1.0)) {
    myVideo.playbackRate = 2.0;
  } else {
    myVideo.playbackRate = 1.0;
  }
}

//_______________________________________________________________________
//steps(timestamp) logic

const step1Button = document.querySelector("#step1-button");
console.log(step1Button);

//listen for click on that button
step1Button.addEventListener("click", gotoStep1);

function gotoStep1() {
  myVideo.currentTime = 17.0;
}

//_______________________________________________________________________
//full-screen logic
//fetch the fast forward button
const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(fullscreenButton);

//listen for click on that button
fullscreenButton.addEventListener("click", goFullscreen);

function goFullscreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
//_______________________________________________________________________
//likes heart logic
//fetch the like button
const heartButton = document.querySelector("#heart-button");
console.log(heartButton);

//listen for click on that button
heartButton.addEventListener("click", updateLikes);

let likes = 0;
const likesContainer = document.querySelector("#likes");
function updateLikes() {
  likes++;
  likesContainer.textContent = likes;
}
//_________
const stardustButton = document.querySelector("#stardust-vid-button");
console.log(stardustButton);

stardustButton.addEventListener("click", function chooseStardust() {
  chooseVideo(0);
  //or chooseSrc("stardust.mp4");
});

const zenscapeButton = document.querySelector("#zenscape-vid-button");
zenscapeButton.addEventListener("click", function chooseZenscape() {
  chooseVideo(1);
  //or chooseSrc("zenscape.mp4");
});

const musicVidButton = document.querySelector("#musicvideo-vid-button");
console.log(musicVidButton);
musicVidButton.addEventListener("click", function chooseMusicvideo() {
  video.play();
});
