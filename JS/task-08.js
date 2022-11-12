const form = document.querySelector(".login-form");

form.addEventListener("submit", onCheckFormSubmit);

function onCheckFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill the form!");
  }
  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);
  event.currentTarget.reset();
}
