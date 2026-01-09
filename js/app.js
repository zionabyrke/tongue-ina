// where js console tested runs (like a script)

let currentUser = loadUser();
let currentCategory = null;

const categorySection = document.getElementById("categorySection");
const feedbackSection = document.getElementById("feedbackSection");

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

  // SWITCH UI STATE
  categorySection.style.display = "none";
  feedbackSection.style.display = "block";
}

function submitFeedback() {
  const salt = parseInt(saltSlider.value);
  const sweet = parseInt(sweetSlider.value);

  document.getElementById("advice").innerText =
    generateAdvice(salt, sweet);

  updatePreferences(currentUser, currentCategory, salt, sweet);
  saveUser(currentUser);

  // RESET SLIDERS
  saltSlider.value = 3;
  sweetSlider.value = 3;
  document.getElementById("saltValue").innerText = "3";
  document.getElementById("sweetValue").innerText = "3";

  // SWITCH BACK TO CATEGORY
  feedbackSection.style.display = "none";
  categorySection.style.display = "block";
}
