const nextButton = document.querySelector("#next-button");
const prevButton = document.querySelector("#prev-button");

let imageIndex = 0;

const images = [
  "images/01.jpg",
  "images/02.jpg",
  "images/03.jpg",
  "images/04.jpg",
  "images/05.jpg",
  "images/06.jpg",
  "images/07.jpg",
];

nextButton.addEventListener("click", () => {
  renderImage(getNextImage());
});

prevButton.addEventListener("click", () => {
  renderImage(getPreviousImage());
});

function getNextImage() {
  if (imageIndex != images.length - 1) imageIndex++;
  else imageIndex = 0;
  return images[imageIndex];
}

function getPreviousImage() {
  if (imageIndex != 0) imageIndex--;
  else imageIndex = images.length - 1;
  return images[imageIndex];
}

function renderImage(imageToRender) {
  const image = document.querySelector("#image");
  image.src = imageToRender;
}
