import loadHome from "./home";

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.classList.add("header-title");
  restaurantName.textContent = "Shibuya Ramen";

  header.appendChild(restaurantName);
  header.appendChild(createNav());
  return header;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main-content");
  main.setAttribute("id", "main");
  return main;
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const footerText = document.createElement("h2");
  footerText.textContent = "© Jasper Sanchez 2022 ";

  const githubIcon = document.createElement("i");
  githubIcon.classList.add("fab");
  githubIcon.classList.add("fa-github");

  footer.appendChild(footerText);
  footerText.appendChild(githubIcon);

  return footer;
}

function createNav() {
  const nav = document.createElement("nav");
  nav.classList.add("header-nav");

  const homeBtn = createButton("Home");
  const menuBtn = createButton("Menu");
  const contactBtn = createButton("Contact");

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  return nav;
}

function createButton(textContent) {
  const newButton = document.createElement("button");
  newButton.classList.add("nav-btn");
  newButton.textContent = textContent;
  newButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-active")) return;
    setActiveButton(newButton);
  });

  return newButton;
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".nav-btn");

  buttons.forEach((item) => {
    if (item !== this) {
      item.classList.remove("btn-active");
    }
  });

  button.classList.add("btn-active");
}

function initWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActiveButton(document.querySelector(".nav-btn"));
  loadHome();
}

export default initWebsite;
