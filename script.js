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
