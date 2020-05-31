//Init on DOM Load
document.addEventListener("DOMContentLoaded", init);

//Init App
function init() {
  particlesJS.load(
    "particles-js",
    "../public/assets/particlesjs-config.json",
    function () {
      console.log("callback - particles.js config loaded");
    }
  );
}

const hamburger = {
  navToggle: document.querySelector(".burger"),
  nav: document.querySelector(".nav-links"),
};
function doToggle(e) {
  console.log(e);
  e.preventDefault();
  hamburger.navToggle.classList.toggle("expanded");
  hamburger.nav.classList.toggle("expanded");
}
const links = hamburger.nav.querySelectorAll("nav a");

hamburger.navToggle.addEventListener("click", doToggle);
links.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.navToggle.classList.toggle("expanded");
    hamburger.nav.classList.toggle("expanded");
  });
});
