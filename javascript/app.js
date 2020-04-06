// Functionaity for burger menu
/*
const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});
*/

// Work Page

const workBtn = document.querySelector(".work-btn");
const closeBtn = document.querySelector("#close-btn");
const body = document.querySelector("body");

let tl = gsap.timeline();

// Work Button Settings
workBtn.addEventListener("click", () => {
  // Background Animation
  tl.to("#work-page", {
    duration: 1,
    opacity: 1,
    y: -window.innerHeight,
  })
    // Page Heading Animation
    .fromTo(
      ".work-heading",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
      }
    )
    // Image Gallery Animation
    .from(".image-gallery img", {
      y: 200,
      opacity: 0,
      delay: 0.25,
      stagger: {
        amount: 1,
        ease: "ease",
      },
    });

  // Overflow Settings
  body.style.overflowY = "scroll";
});

// Close Button Settings
closeBtn.addEventListener("click", () => {
  gsap.to("#work-page", {
    duration: 2,
    opacity: 0,
    y: window.innerHeight,
  });

  body.style.overflow = "hidden";
});

// Contact Page

const contactBtn = document.querySelector(".contact-btn");

// Contact Button
contactBtn.addEventListener("click", () => {
  tl.to("#contact-page", {
    duration: 1,
    opacity: 1,
    x: -window.innerWidth,
  }).fromTo("");
});
