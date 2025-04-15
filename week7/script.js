//For this application I need to fetch the audio and the button so that
//when someone clicks on the button I can then play the audio.

const topHeading = document.querySelector("#top-heading");
console.log(topHeading);

//TO FIGURE OUT: how to make the words above change upon play/pause button

const airportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);

//my logic for playing sound:
const playButton = document.querySelector("#play-button");
console.log(playButton);

playButton.addEventListener("click", playAudio);

function playAudio() {
  myNewHeading = "Audio is currently playing...";
  airportAudio.play();
  topHeading.textContent = myNewHeading;
}

//________________________________

//my logic for pausing sound:
const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

pauseButton.addEventListener("click", pauseAudio);

function pauseAudio() {
  myNewHeading = "Audio is paused";
  airportAudio.pause();
  topHeading.textContent = myNewHeading;
}

//my logic for the pop sound:
const popSound = document.querySelector("#pop-audio");
console.log(popSound);

const popButton = document.querySelector("#pop-button");
console.log(popButton);

popButton.addEventListener("click", popAudio);

function popAudio() {
  myNewHeading = "Pop!";
  popSound.play();
  //volume only goes from 0 to 1 (100%), and no higher. If want louder, source file must be louder
  popSound.volume = 1;
  topHeading.textContent = myNewHeading;
}

//airportAudio.play() -> bad example, dont just immediately play button on website load
