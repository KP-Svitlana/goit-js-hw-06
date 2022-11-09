const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

const getCategoryElenets = categories.forEach((category) => {
  const elements = category.querySelectorAll("li");
  console.log("Category:", category.firstElementChild.textContent);
  console.log("Elements:", elements.length);
});
