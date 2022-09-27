function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  home.appendChild(createHeader("Heavyweight Ramen Champ in Shibuya"));
  home.appendChild(createHeader("World Class Ingredients"));
  home.appendChild(createHomeBtn("BOOK NOW"));

  return home;
}

function createHeader(text) {
  const h2 = document.createElement("h2");
  h2.textContent = text;

  return h2;
}

function createHomeBtn(text) {
  const homeBtn = document.createElement("button");
  homeBtn.classList.add("home-btn");
  homeBtn.textContent = text;

  return homeBtn;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
