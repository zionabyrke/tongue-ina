function getRecommendation(user, category) {
  const prefs = user.preferences[category] || BASELINES[category];

  const saltTsp = gramsToTeaspoons(prefs.salt, "salt");
  const sugarTsp = gramsToTeaspoons(prefs.sugar, "sugar");

  return {
    salt: prefs.salt,
    sugar: prefs.sugar,
    // test toFixed() muna
    message: 
      "Salt: " + saltTsp.toFixed(2) + " tsp\n" +
      "Sugar: " + sugarTsp.toFixed(2) + " tsp"
  };
}
