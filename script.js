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
let amount = 0;

nextButton.addEventListener("click", () => {
  // renderImage(getNextImage());
  amount += 300;
  moveRight(amount);
});

prevButton.addEventListener("click", () => {
  // renderImage(getPreviousImage());
  amount -= 300;
  moveLeft(amount);
});

function moveRight(amount) {
  const gallery = document.querySelector(".gallery");
  gallery.style.transform = `translateX(${amount}px)`;
}

function moveLeft(amount) {
  const gallery = document.querySelector(".gallery");
  gallery.style.transform = `translateX(${amount}px)`;
}

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
