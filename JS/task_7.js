const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", getChangeFontSize);

function getChangeFontSize(event) {
  text.style.fontSize = `${input.value}px`;
}
