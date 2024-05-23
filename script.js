const images = [
  "images/01.jpg",
  "images/02.jpg",
  "images/03.jpg",
  "images/04.jpg",
  "images/05.jpg",
  "images/06.jpg",
  "images/07.jpg",
  "images/08.jpeg",
  "images/09.jpeg",
  "images/10.jpeg",
  "images/11.jpeg",
  "images/12.jpeg",
  "images/13.jpeg",
];

const IMAGE_WIDTH_IN_PIXELS = 300;
let currentImageIndex = 0;

// Denna variabel är en x-position relativ till varje bilds start-position i x-led.
// Bilderna flyttar sig alltid 300px åt gången men relativeXPosition ökar/minskar med 300 för varje steg.
// Tex 3 steg till höger minskar relativeXPosition till -900, eftersom relativt till varje bilds
// startposition har de förflyttat sig 900px.
let relativeXPosition = 0;

(function initializeGallery() {
  const nextButton = document.querySelector("#next-button");
  const prevButton = document.querySelector("#prev-button");

  nextButton.addEventListener("click", nextImage);
  prevButton.addEventListener("click", previousImage);

  for (const imageSrc of images) {
    addImage(createImage(imageSrc));
  }
  centerFirstImage();
  selectImage(getImages()[0]);
})();

function centerFirstImage() {
  // Bildspelet är centrerat med 'justify-content: center;'
  // Om bildspelet har tex 7 bilder hamnar bild 4 i mitten.
  // Vi måste därför hoppa ett antal steg åt vänster
  for (let i = 1; i < images.length; i += 2) {
    moveLeft();
  }
  // Om bildspelet har jämnt antal bilder hamnar alla bilder ett halvt steg åt sidan.
  // moveLeftHalfStep åtgärdar det.
  if (images.length % 2 == 0) {
    moveLeftHalfstep();
  }
}

function selectImage(image) {
  image.classList.add("selected");
}

function deselectImages() {
  for (const image of getImages()) {
    image.classList.remove("selected");
  }
}

function nextImage() {
  if (currentImageIndex === images.length - 1) return;
  moveRight();
  deselectImages();
  selectImage(getNextImage());
}

function previousImage() {
  if (currentImageIndex === 0) return;
  moveLeft();
  deselectImages();
  selectImage(getPreviousImage());
}

function moveRight() {
  relativeXPosition -= IMAGE_WIDTH_IN_PIXELS;
  moveImages();
}

function moveLeft() {
  relativeXPosition += IMAGE_WIDTH_IN_PIXELS;
  moveImages();
}

function moveLeftHalfstep() {
  relativeXPosition -= IMAGE_WIDTH_IN_PIXELS / 2;
  moveImages();
}

function moveImages() {
  for (const image of getImages()) {
    image.style.transform = `translateX(${relativeXPosition}px)`;
  }
}

function getNextImage() {
  currentImageIndex++;
  return getImages()[currentImageIndex];
}

function getPreviousImage() {
  currentImageIndex--;
  return getImages()[currentImageIndex];
}

function getImages() {
  return document.querySelectorAll(".image");
}

function createImage(imageSrc) {
  const newImage = document.createElement("img");
  newImage.src = imageSrc;
  newImage.classList.add("image");

  return newImage;
}

function addImage(image) {
  const galleryContainer = document.querySelector(".gallery-container");
  galleryContainer.appendChild(image);
}
