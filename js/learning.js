function updatePreferences(user, category, saltRating, sweetRating) {
  if (!user.preferences[category]) {
    user.preferences[category] = { ...BASELINES[category] };
  }

  const prefs = user.preferences[category];

  prefs.salt += LEARNING_RATE * (saltRating - 3);
  prefs.sugar += LEARNING_RATE * (sweetRating - 3);

  prefs.salt = Math.max(0, prefs.salt);
  prefs.sugar = Math.max(0, prefs.sugar);
}
