const nextButton = document.querySelector("#next-button");
const prevButton = document.querySelector("#prev-button");
const galleryContainer = document.querySelector(".gallery-container");

const images = [
  "images/01.jpg",
  "images/02.jpg",
  "images/03.jpg",
  "images/04.jpg",
  "images/05.jpg",
  "images/06.jpg",
  "images/07.jpg",
];

let selectedImage = images[0];

function getNextImage(currentImage) {
  const index = images.indexOf(currentImage);
  if (index != images.length - 1) return images[index + 1];
  else return images[0];
}

function getPreviousImage(currentImage) {
  const index = images.indexOf(currentImage);
  if (index != 0) return images[index - 1];
  else return images[images.length - 1];
}

(function renderImages() {
  for (const image of images) {
    galleryContainer.appendChild(createImage(image));
  }
})();

function createImage(imageSrc) {
  const newImageContainer = document.createElement("div");
  newImageContainer.classList.add("image-container");

  const newImage = document.createElement("img");
  newImage.src = imageSrc;

  newImageContainer.appendChild(newImage);

  return newImageContainer;
}
