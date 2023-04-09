const navbarBtns = document.querySelector(".navbar ul");
const hamburgerBtn = document.querySelector(".hamburger");
document.querySelector(".hamburger").addEventListener("click", () => {
  if (navbarBtns.classList.contains("hide"))
    navbarBtns.classList.remove("hide");
  else navbarBtns.classList.add("hide");
});

function showHamburger(x) {
  if (x.matches) {
    // If media query matches
    hamburgerBtn.classList.remove("hide");
  } else {
    navbarBtns.classList.remove("hide");
    hamburgerBtn.classList.add("hide");
  }
}

var x = window.matchMedia("(max-width: 580px)");
showHamburger(x); // Call listener function at run time
x.addListener(showHamburger); // Attach listener function on state changes