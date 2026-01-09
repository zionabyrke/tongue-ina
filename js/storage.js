function loadUser() {
  const data = localStorage.getItem("tastebalance_user");
  if (!data) {
    return { preferences: {} };
  }
  return JSON.parse(data);
}

function saveUser(user) {
  localStorage.setItem("tastebalance_user", JSON.stringify(user));
}
