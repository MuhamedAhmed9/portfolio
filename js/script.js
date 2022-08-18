//style switcher
let styleSwitcher = document.querySelector(".style-switcher");
let styleSwitcherBtn = document.querySelector(".style-switcher-toggler");
let spanColors = document.querySelectorAll(".style-switcher .colors span");

for (let i = 0; i < spanColors.length; i++) {
  spanColors[i].style.backgroundColor = spanColors[i].dataset.color;
  spanColors[i].addEventListener("click", function () {
    document.documentElement.style.setProperty(
      "--skin-color",
      spanColors[i].style.backgroundColor
    );
    localStorage.setItem("currentColor", spanColors[i].style.backgroundColor);
  });
}

styleSwitcherBtn.addEventListener("click", function () {
  styleSwitcher.classList.toggle("open");
});

//getting current color
let currentColor = localStorage.getItem("currentColor");
if (currentColor) {
  document.documentElement.style.setProperty("--skin-color", currentColor);
}

//----------------------------------------------------------------------------
//darkmode theme
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("currentMode", "dark");
  } else {
    localStorage.removeItem("currentMode");
  }
});

//getting current mode
let currentMode = localStorage.getItem("currentMode");
if (currentMode == "dark") {
  document.body.classList.add("dark");
}

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
    dayNight.querySelector("i").classList.remove("fa-moon");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
    dayNight.querySelector("i").classList.add("fa-sun");
  }
});

//----------------------------------------------------------------------------
//typing effect
var typed = new Typed(".typing", {
  strings: [
    "",
    "Front-End Developer",
    "back-end Developer",
    "Graphic Designer",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
//---------------------------------------------------------------------------------
//navlinks
const navLinks = document.querySelectorAll(".aside .nav li a");
const sections = document.querySelectorAll("section");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");
    showSection(this.dataset.section);
  });
}

function showSection(sectionId) {
  let activeSection = document.querySelector(`[id="${sectionId}"]`);
  sections.forEach((section) => {
    section.classList.remove("active");
  });
  activeSection.classList.add("active");
}
