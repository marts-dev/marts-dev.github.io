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
