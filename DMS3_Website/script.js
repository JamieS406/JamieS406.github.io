// Hero Section interactables
document.addEventListener("mousemove", function (e) {
  // Only animate elements when mouse is in the hero section
  const heroRect = document.querySelector(".hero").getBoundingClientRect();
  if (e.clientY >= heroRect.top && e.clientY <= heroRect.bottom) {
    const blob = document.querySelector(".blob");
    const oval1 = document.querySelector(".oval-outline-1");
    const oval2 = document.querySelector(".oval-outline-2");
    const oval3 = document.querySelector("#oval-outline-3");

    const moveX = (e.clientX - window.innerWidth / 2) / 30;
    const moveY = (e.clientY - window.innerHeight / 2) / 30;

    blob.style.transform = `translate(${moveX}px, ${moveY}px)`;
    oval1.style.transform = `rotate(10deg) translate(${moveX * 0.5}px, ${
      moveY * 0.3
    }px)`;
    oval2.style.transform = `rotate(5deg) translate(${moveX * -0.3}px, ${
      moveY * 0.5
    }px)`;
    oval3.style.transform = `rotate(4deg) translate(${moveX * 0.3}px, ${
      moveY * 0.8
    }px)`;
  }
});

// Intro2 Interactables
document.addEventListener("mousemove", function (e) {
  // Only animate elements when mouse is in the intro2 section
  const intro2Rect = document.querySelector(".intro2").getBoundingClientRect();
  if (e.clientY >= intro2Rect.top && e.clientY <= intro2Rect.bottom) {
    const blob2 = document.querySelector(".blob2");
    const ovali2 = document.querySelector("#oval-outline-intro2-2");

    const moveX = (e.clientX - window.innerWidth / 2) / 30;
    const moveY = (e.clientY - window.innerHeight / 2) / 30;

    blob2.style.transform = `translate(${moveX}px, ${moveY}px)`;
    ovali2.style.transform = `rotate(4deg) translate(${moveX * 0.6}px, ${
      moveY * 2
    }px)`;
  }
});

// Howwork Interactables
document.addEventListener("mousemove", function (e) {
  // Only animate elements when mouse is in the intro2 section
  const intro2Rect = document
    .querySelector(".how-it-works")
    .getBoundingClientRect();
  if (e.clientY >= intro2Rect.top && e.clientY <= intro2Rect.bottom) {
    const blob2 = document.querySelector(".blob3");

    const moveX = (e.clientX - window.innerWidth / 2) / 30;
    const moveY = (e.clientY - window.innerHeight / 2) / 30;

    blob3.style.transform = `translate(${moveX}px, ${moveY}px)`;
    ovali2.style.transform = `rotate(4deg) translate(${moveX * 0.6}px, ${
      moveY * 2
    }px)`;
  }
});

// // "Try sample" play section
// const sound = document.querySelector("#pronounciation");
// const playPauseBtn = document.querySelector("#play-button");
// const playPauseImg = document.querySelector("#play-pause-img");
// const progressBar = document.querySelector(".progress-bar");
// sound.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
// video.addEventListener("timeupdate", updateProgressBar);

// //   // Animate progress bar
// //   const progress = document.querySelector(".progress");
// //   if (this.innerHTML === "⏸") {

// function togglePlayPause() {
//   if (video.paused || video.ended) {
//     video.play();
//     playPauseImg.src = "⏸";
//   } else {
//     video.pause();
//     playPauseImg.src = "▶";
//   }
// }
// function updateProgressBar() {
//   const value = (sound.currentTime / sound.duration) * 100;
//   progressBar.style.width = value + "%";
// }
// // document.querySelector(".play-button").addEventListener("click", function () {
// //   this.innerHTML = this.innerHTML === "▶" ? "⏸" : "▶";

// //   // Animate progress bar
// //   const progress = document.querySelector(".progress");
// //   if (this.innerHTML === "⏸") {
// //     let width = 30;
// //     const interval = setInterval(() => {
// //       if (width >= 100) {
// //         clearInterval(interval);
// //         this.innerHTML = "▶";
// //         setTimeout(() => {
// //           progress.style.width = "30%";
// //         }, 500);
// //       } else {
// //         width += 0.5;
// //         progress.style.width = width + "%";
// //       }
// //     }, 50);
// //   }
// // });
