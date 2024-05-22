const nextButton = document.querySelector("#next-button");
const prevButton = document.querySelector("#prev-button");
const IMAGE_WIDTH_IN_PIXELS = 300;

let imageIndex = 0;
let distanceToMoveInPixels = IMAGE_WIDTH_IN_PIXELS;

const images = [
  "images/01.jpg",
  "images/02.jpg",
  "images/03.jpg",
  "images/04.jpg",
  "images/05.jpg",
  "images/06.jpg",
  "images/07.jpg",
];

const imageElements = document.querySelectorAll(".image");

nextButton.addEventListener("click", () => {
  distanceToMoveInPixels -= IMAGE_WIDTH_IN_PIXELS;
  nextImage(distanceToMoveInPixels);
  deselectImages();
  selectImage(getNextImage());
});

prevButton.addEventListener("click", () => {
  distanceToMoveInPixels += IMAGE_WIDTH_IN_PIXELS;
  previousImage(distanceToMoveInPixels);
  deselectImages();
  selectImage(getPreviousImage());
});

function centerFirstImage() {
  for (let i = 1; i < images.length; i += 2) {
    previousImage(distanceToMoveInPixels);
    distanceToMoveInPixels += IMAGE_WIDTH_IN_PIXELS;
    console.log("test");
  }
  distanceToMoveInPixels -= IMAGE_WIDTH_IN_PIXELS;

  if (images.length % 2 == 0) {
    nextImage(distanceToMoveInPixels - IMAGE_WIDTH_IN_PIXELS / 2);
    distanceToMoveInPixels -= IMAGE_WIDTH_IN_PIXELS / 2;
    console.log("te");
  }
}

function getNextImage() {
  const images = document.querySelectorAll(".image");
  imageIndex++;
  return images[imageIndex];
}

function getPreviousImage() {
  const images = document.querySelectorAll(".image");
  imageIndex--;
  return images[imageIndex];
}

function nextImage(distance) {
  const images = document.querySelectorAll(".image");
  for (const image of images) {
    image.style.transform = `translateX(${distance}px)`;
  }
}

function previousImage(distance) {
  const images = document.querySelectorAll(".image");
  for (const image of images) {
    image.style.transform = `translateX(${distance}px)`;
  }
}

function renderImage(imageToRender) {
  const image = document.querySelector("#image");
  image.src = imageToRender;
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

centerFirstImage();
selectImage(imageElements[0]);
