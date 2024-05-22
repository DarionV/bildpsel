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
  "images/07.jpg",
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
  for (let i = 1; i < images.length; i += 2) {
    moveLeft();
  }
  // Om jämnt antal bilder i bildspelet hamnar alla bilder ett halvt steg åt sidan.
  // moveLeftHalfStep åtgärdar det.
  if (images.length % 2 == 0) {
    moveLeftHalfstep();
  }
}

function getNextImage() {
  imageIndex++;
  return getImages()[imageIndex];
}

function getPreviousImage() {
  imageIndex--;
  return getImages()[imageIndex];
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
  moveImages();
}

function moveLeft() {
  distanceToMoveInPixels += IMAGE_WIDTH_IN_PIXELS;
  moveImages();
}

function moveLeftHalfstep() {
  distanceToMoveInPixels -= IMAGE_WIDTH_IN_PIXELS / 2;
  moveImages();
}

function moveImages() {
  const images = getImages();
  for (const image of images) {
    image.style.transform = `translateX(${distanceToMoveInPixels}px)`;
  }
}

function selectImage(image) {
  image.classList.add("selected");
}

function deselectImages() {
  const images = getImages();
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
