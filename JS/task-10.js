const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

input.addEventListener("input", (event) => {
  let amount = event.currentTarget.value;

  createButton.addEventListener("click", (e) => {
    createBoxes(amount);
    amount = 0;
  });

  destroyButton.addEventListener("click", (e) => {
    destroyBoxes();
    amount = 0;
    input.value = "";
  });
});

function createBoxes(quantity) {
  const newBoxes = [];

  getAmountArray(quantity).forEach((el) => {
    const box = document.createElement("div");
    box.classList = `${el}`;
    box.style.width = getCalcSize(el);
    box.style.height = getCalcSize(el);
    box.style.backgroundColor = `${getRandomHexColor()}`;
    newBoxes.push(box);
  });
  boxes.append(...newBoxes);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getAmountArray(number) {
  const array = [];

  for (let i = 0; i < number; i += 1) {
    array.push(i);
  }
  return array;
}

function getCalcSize(el) {
  const size = Number(el + "0") + 30;
  return `${size}px`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
