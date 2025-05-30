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
//_________________________________________//

// Interactive workflow items
document.querySelectorAll(".workflow-item").forEach((item) => {
  item.addEventListener("click", function () {
    const type = this.getAttribute("data-type");
    const overlay = document.getElementById("overlay");
    const detailWindow = document.getElementById(`${type}-detail`);

    // Add active class to clicked item
    document
      .querySelectorAll(".workflow-item")
      .forEach((el) => el.classList.remove("active"));
    this.classList.add("active");

    // Show overlay and detail window
    overlay.classList.add("active");
    detailWindow.classList.add("active");

    // Prevent body scroll
    document.body.style.overflow = "hidden";
  });
});

// // Close detail windows
// function closeDetailWindow() {
//   const overlay = document.getElementById("overlay");
//   const detailWindows = document.querySelectorAll(".detail-window");
//   const workflowItems = document.querySelectorAll(".workflow-item");

//   overlay.classList.remove("active");
//   detailWindows.forEach((window) => window.classList.remove("active"));
//   workflowItems.forEach((item) => item.classList.remove("active"));

//   // Restore body scroll
//   document.body.style.overflow = "";
// }

// // Close button event listeners
// document.querySelectorAll(".close-button").forEach((button) => {
//   button.addEventListener("click", closeDetailWindow);
// });

// // Overlay click to close
// document.getElementById("overlay").addEventListener("click", closeDetailWindow);

// // Escape key to close
// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape") {
//     closeDetailWindow();
//   }
// });
