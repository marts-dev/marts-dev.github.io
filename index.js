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

//Init on DOM Load
document.addEventListener("DOMContentLoaded", init);

//Init App
function init() {
  const textElement = document.querySelector(".txt-type");
  const words = JSON.parse(textElement.getAttribute("data-words"));
  const wait = JSON.parse(textElement.getAttribute("data-wait"));
  //INit typeWriter
  new TypeWriter(textElement, words, wait);
}
