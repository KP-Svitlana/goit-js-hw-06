const button = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.querySelector("body");

button.addEventListener("click", getChangeBackgroundColor);

function getChangeBackgroundColor(event) {
  let color = getRandomHexColor();

  body.style.backgroundColor = `${color}`;
  span.textContent = `${color}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
