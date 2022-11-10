const battonDecrement = document.querySelector('[data-action="decrement"]');
const battonIncrement = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

let counterValue = 0;
counter.textContent = counterValue;

battonDecrement.addEventListener("click", getCounterDecrement);
battonIncrement.addEventListener("click", getCounterIncrement);

function getCounterDecrement() {
  counterValue -= 1;
  getUpdateCounter();
}

function getCounterIncrement() {
  counterValue += 1;
  getUpdateCounter();
}

function getUpdateCounter() {
  counter.textContent = counterValue;
}
