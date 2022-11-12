const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  span.textContent = event.currentTarget.value;
});

input.addEventListener("blur", (event) => {
  if (event.currentTarget.value === "") {
    span.textContent = "Anonymous";
  }
});
