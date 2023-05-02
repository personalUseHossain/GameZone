//Hamburger function

//variables

const navIcon = document.querySelector(".fa-bars-staggered");
const menu = document.querySelector(".ul");
//EventListener and function
navIcon.addEventListener("click", () => {
  if (isBar(navIcon)) {
    navIcon.classList.replace("fa-bars-staggered", "fa-xmark");
    menu.style.right = "0%";
  } else {
    navIcon.classList.replace("fa-xmark", "fa-bars-staggered");
    menu.style.right = "100%";
  }
});

//Checking if navIcon is bar or xmark
function isBar(icon) {
  if (icon.classList.contains("fa-bars-staggered")) {
    return true;
  } else {
    return false;
  }
}

//Navigation bar scroll function

//variables

let prevScrollpos = window.pageYOffset;
let navbar = document.querySelector(".navbar");

//main function
window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0%";
  } else {
    navbar.style.top = "-20%";
  }

  prevScrollpos = currentScrollPos;
});
