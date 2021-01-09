AOS.init();
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }
  type() {
    //Current index of word
    const current = this.wordIndex % this.words.length;
    //Get full text
    const fullTxt = this.words[current];
    //Check if deleting
    if (this.isDeleting) {
      //Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      //Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    //Insert txt to element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    //Typing speed
    let typeSpeed = 120;
    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    //Full word complete
    if (!this.isDeleting && this.txt === fullTxt) {
      //Make pause at end
      typeSpeed = this.wait;
      //Set delete flag to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      //Go to next word
      this.wordIndex++;
      //Make pause before typing again
      typeSpeed = 120;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

//Init App
function init() {
  const textElement = document.querySelector(".txt-type");
  const words = JSON.parse(textElement.getAttribute("data-words"));
  const wait = JSON.parse(textElement.getAttribute("data-wait"));
  //INit typeWriter
  new TypeWriter(textElement, words, wait);
  const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide>img');

//Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners
nextBtn.addEventListener('click', ()=>{
  if (counter >= carouselImages.length - 1 ) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out'
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', ()=>{
  if (counter <= 0 ) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out'
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = 'none'
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (carouselImages[counter].id === 'firstClone') {
    carouselSlide.style.transition = 'none'
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});
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

//Init on DOM Load
document.addEventListener("DOMContentLoaded", init);

//const links = hamburger.nav.querySelectorAll("nav a");

//hamburger.navToggle.addEventListener("click", doToggle);
//links.forEach((link) => {
//  link.addEventListener("click", () => {
//    hamburger.navToggle.classList.toggle("expanded");
//    hamburger.nav.classList.toggle("expanded");
//  });
//});