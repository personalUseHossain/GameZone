//Hamburger function

//variables

const navIcon = document.querySelector(".fa-bars-staggered");
const menu = document.querySelector(".ul");
const body = document.querySelector("body");
//EventListener and function
navIcon.addEventListener("click", () => {
  if (isBar(navIcon)) {
    navIcon.classList.replace("fa-bars-staggered", "fa-xmark");
    menu.style.right = "0%";
    body.classList.add("no-scroll");
  } else {
    navIcon.classList.replace("fa-xmark", "fa-bars-staggered");
    menu.style.right = "100%";
    body.classList.remove("no-scroll");
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

//Email check

//variable
const subscribeInput = document.getElementById("subscribe-input");
const subscribeSmall = document.getElementById("subscribe-small");
const subscribeButton = document.getElementById("subscribe-button");

subscribeButton.addEventListener("click", () => {
  if (!validateEmail(subscribeInput.value)) {
    subscribeSmall.style.display = "block";
    subscribeSmall.innerHTML = "Email is not valid";
  } else {
    subscribeSmall.style.display = "none";
  }
});

//Checking Email validation

const validateEmail = (email) => {
  if (
    String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    return true;
  } else {
    return false;
  }
};
