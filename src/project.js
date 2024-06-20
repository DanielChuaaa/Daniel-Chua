const navLink = document.querySelector(".navLink");
const hamburgerButton = document.querySelector(".hamburgerButton");
const mainContent = document.querySelector("main");
const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer");
let breakPoint = window.matchMedia("(min-width: 768px)");

breakPoint.addEventListener("change", handleScreenResize);
hamburgerButton.addEventListener("click", hamburgerButtonClicked);

function handleScreenResize() {
  if (breakPoint.matches) {
    navLink.classList.remove("navLink-active");
    hamburgerButton.classList.remove("hamburgerButton-active");
    hamburgerButton.src = "../assets/hamburger.png";
    mainContent.classList.remove("bgBlurEffect");
    sections.forEach((section) => section.classList.remove("bgBlurEffect"));
    footer.classList.remove("bgBlurEffect");
  } else {
    navLink.classList.remove("navLink-active");
  }
}

function hamburgerButtonClicked() {
  if (!hamburgerButton.classList.contains("hamburgerButton-active")) {
    hamburgerButton.classList.add("hamburgerButton-active");
    navLink.classList.add("navLink-active");
    hamburgerButton.src = "../assets/xicon.png";
    mainContent.classList.add("bgBlurEffect");
    sections.forEach((section) => section.classList.add("bgBlurEffect"));
    footer.classList.add("bgBlurEffect");
  } else {
    hamburgerButton.classList.remove("hamburgerButton-active");
    navLink.classList.remove("navLink-active");
    hamburgerButton.src = "../assets/hamburger.png";
    mainContent.classList.remove("bgBlurEffect");
    sections.forEach((section) => section.classList.remove("bgBlurEffect"));
    footer.classList.remove("bgBlurEffect");
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry); // Log each entry to see what's happening
    if (entry.isIntersecting) {
      entry.target.classList.add("showImg");
      entry.target.classList.add("showText");
    } else {
      entry.target.classList.remove("showImg");
      entry.target.classList.remove("showText");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hiddenImg");
const hiddenText = document.querySelectorAll(".hiddenText");
hiddenElements.forEach((el) => observer.observe(el));
hiddenText.forEach((el) => observer.observe(el));

console.log(document.getElementById("downloadButton")); // Should not be null
