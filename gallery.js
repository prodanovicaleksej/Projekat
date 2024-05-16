import img from "./slike.js";

let currentIndex = 0;
const totalImages = img.length;

function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalImages - 1;
  }
  const currentImage = document.getElementById("currentImage");
  currentImage.src = img[currentIndex].img;
  currentImage.classList.add("slide-right");
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= totalImages) {
    currentIndex = 0;
  }
  const currentImage = document.getElementById("currentImage");
  currentImage.src = img[currentIndex].img;
  currentImage.classList.add("slide-left");
}

function updateImage() {
  const currentImage = document.getElementById("currentImage");
  currentImage.src = img[currentIndex].img;
}

updateImage();


document.getElementById("prevButton").addEventListener("click", prevImage);
document.getElementById("nextButton").addEventListener("click", nextImage);

document
  .getElementById("currentImage")
  .addEventListener("transitionend", function () {
    this.classList.remove("slide-left");
    this.classList.remove("slide-right");
  });
