// where js console tested runs (like a script)

let currentUser = loadUser();
let currentCategory = null;

const saltSlider = document.getElementById("saltRating");
const sweetSlider = document.getElementById("sweetRating");

saltSlider.oninput = () =>
  document.getElementById("saltValue").innerText = saltSlider.value;

sweetSlider.oninput = () =>
  document.getElementById("sweetValue").innerText = sweetSlider.value;

function runRecommendation() {
  currentCategory = document.getElementById("category").value;
  const result = getRecommendation(currentUser, currentCategory);
  document.getElementById("output").innerText = result.message;
}

function submitFeedback() {
  const salt = parseInt(saltSlider.value);
  const sweet = parseInt(sweetSlider.value);

  document.getElementById("advice").innerText =
    generateAdvice(salt, sweet);

  updatePreferences(currentUser, currentCategory, salt, sweet);
  saveUser(currentUser);
}
