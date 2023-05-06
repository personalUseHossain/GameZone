//Loading animation funciton
window.addEventListener("load", () => {
  const loadingImg = document.querySelector(".loading");
  loadingImg.style.transform = "translateX(100%)";
  loadingImg.style.opacity = "0";
});

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

//game section function to open new html file
const game = document.querySelectorAll(".game");

game.forEach((game) => {
  game.addEventListener("click", () => {
    const url = "../HTML/insidegame.html";
    const imgurl = game.querySelector("img").src;
    const gamename = game.querySelector("p").innerHTML;
    const favicon = game.querySelector("img").src;
    console.log(favicon);
    const pagename = `${gamename} || Enjoy all game in one place`;
    console.timeLog(imgurl);

    fetch(url)
      .then((res) => res.text())
      .then((html) => {
        let outputHTML = html.replace("{{%gamename%}}", gamename);
        outputHTML = outputHTML.replace("{{%imgsrc%}}", imgurl);
        outputHTML = outputHTML.replace("{{%pageName%}}", pagename);
        outputHTML = outputHTML.replace("{{%favicon%}}", favicon);

        const newWindow = window.open("", "-blank");
        newWindow.document.write(outputHTML);
      });
  });
});

//Making the website load after all images load completed

const allIMG = document.querySelectorAll("img");
allIMG.forEach((img) => {
  img.addEventListener("load", () => {
    document.querySelector("body").style.display = "block";
  });
});
