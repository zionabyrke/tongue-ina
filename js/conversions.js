function gramsToTeaspoons(grams, type) {
  if (type === "salt") return grams / 6;
  if (type === "sugar") return grams / 4;
  return 0;
}
