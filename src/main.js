const navLink = document.querySelector(".navLink");
const hamburgerButton = document.querySelector(".hamburgerButton");
const mainContent = document.querySelector("main");
const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer");
let i;
let slides = document.getElementsByClassName("carouselImg");
let guideLine = document.getElementsByClassName("carouselImgGuide");
let dots = document.getElementsByClassName("dot");
let breakPoint = window.matchMedia("(min-width: 768px)");
let slideIndex = 2;
const downloadButton = document.getElementById("downloadButton");

breakPoint.addEventListener("change", handleScreenResize);
hamburgerButton.addEventListener("click", hamburgerButtonClicked);
downloadButton.addEventListener("click", downloadCV);

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("carouselImg-active");
  }

  for (i = 0; i < guideLine.length; i++) {
    guideLine[i].classList.remove("carouselImgGuide-active");
  }

  if (slideIndex <= guideLine.length) {
    guideLine[slideIndex - 1].classList.add("carouselImgGuide-active");
  }

  slides[slideIndex - 1].classList.add("carouselImg-active");

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";
}

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

function downloadCV() {
  const driveFileId = "1lrMu3DDAkV7wDWqWPOr_QfSjGzQmezuH";
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

  const a = document.createElement("a");
  a.href = downloadUrl;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
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
