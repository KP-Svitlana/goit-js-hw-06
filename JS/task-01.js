const body = document.body;

const firstElement = body.firstElementChild;

const list = firstElement.nextElementSibling;

const listOFChildrens = list.children;

console.log("Number of categories:", listOFChildrens.length);

const newListOfChildrens = [...listOFChildrens];

const getCategoryElements = newListOfChildrens.forEach((category) => {
  const title = category.firstElementChild;
  console.log("Category:", title.textContent);
  const elements = category.lastElementChild;
  console.log("Elements:", elements.children.length);
});
