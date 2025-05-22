// Add some interactivity
document.addEventListener("mousemove", function (e) {
  // Only animate elements when mouse is in the hero section
  const heroRect = document.querySelector(".hero").getBoundingClientRect();
  if (e.clientY >= heroRect.top && e.clientY <= heroRect.bottom) {
    const blob = document.querySelector(".blob");
    const oval1 = document.querySelector(".oval-outline-1");
    const oval2 = document.querySelector(".oval-outline-2");
    const oval3 = document.querySelector(".oval-outline-3");

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
