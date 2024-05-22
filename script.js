const IMAGE_WIDTH_IN_PIXELS = 300;

let imageIndex = 0;
let distanceToMoveInPixels = 0;

const images = [
  "images/01.jpg",
  "images/02.jpg",
  "images/03.jpg",
  "images/04.jpg",
  "images/05.jpg",
  "images/06.jpg",
];

(function initializeGallery() {
  const nextButton = document.querySelector("#next-button");
  const prevButton = document.querySelector("#prev-button");

  nextButton.addEventListener("click", nextImage);
  prevButton.addEventListener("click", previousImage);

  for (const image of images) {
    addImage(createImage(image));
  }
  centerFirstImage();
  selectImage(getImages()[0]);
})();

function centerFirstImage() {
  // Bildspelet är centrerat med justify-content: center
  // Om bildspelet har tex 7 bilder hamnar bild 4 i mitten.
  // Vi behöver hoppa 3 steg åt vänster
  for (let i = 1; i < images.length; i += 2) {
    moveLeft();
  }
  // Om jämnt antal bilder i bildspelet hamnar första bilden halvt åt sidan.
  // moveHalfStep åtgärdar det.
  if (images.length % 2 == 0) {
    moveLeftHalfstep();
  }
}

function getNextImage() {
  const images = document.querySelectorAll(".image");
  imageIndex++;
  return images[imageIndex];
}

function getPreviousImage() {
  const images = getImages();
  imageIndex--;
  return images[imageIndex];
}

function getImages() {
  return document.querySelectorAll(".image");
}

function nextImage() {
  if (imageIndex === images.length - 1) return;
  moveRight();
  deselectImages();
  selectImage(getNextImage());
}

function previousImage() {
  if (imageIndex === 0) return;
  moveLeft();
  deselectImages();
  selectImage(getPreviousImage());
}

function moveRight() {
  distanceToMoveInPixels -= IMAGE_WIDTH_IN_PIXELS;
  const imageElements = getImages();
  for (const image of imageElements) {
    image.style.transform = `translateX(${distanceToMoveInPixels}px)`;
  }
}

function moveLeft() {
  distanceToMoveInPixels += IMAGE_WIDTH_IN_PIXELS;
  const imageElements = getImages();
  for (const image of imageElements) {
    image.style.transform = `translateX(${distanceToMoveInPixels}px)`;
  }
}

function moveLeftHalfstep() {
  distanceToMoveInPixels -= IMAGE_WIDTH_IN_PIXELS / 2;
  const imageElements = getImages();
  for (const image of imageElements) {
    image.style.transform = `translateX(${distanceToMoveInPixels}px)`;
  }
}

function selectImage(image) {
  image.classList.add("selected");
}

function deselectImages() {
  const images = document.querySelectorAll(".image");
  for (const image of images) {
    image.classList.remove("selected");
  }
}

function createImage(src) {
  const newImage = document.createElement("img");
  newImage.src = src;
  newImage.classList.add("image");

  return newImage;
}

function addImage(image) {
  const galleryContainer = document.querySelector(".gallery-container");
  galleryContainer.appendChild(image);
}
