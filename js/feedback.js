function generateAdvice(saltRating, sweetRating) {
  const advice = [];
// test
  if (saltRating > 3) advice.push("Too salty: add sugar or dilute");
  if (saltRating < 3) advice.push("Not salty enough: add salt");

  if (sweetRating > 3) advice.push("Too sweet: add salt");
  if (sweetRating < 3) advice.push("Not sweet enough: add sugar");

  if (advice.length === 0) {
    advice.push("Flavor balance looks good.");
  }

  return advice.join("\n");
}
