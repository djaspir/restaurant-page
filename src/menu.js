function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(createMenuItem("Gyoza", "50 Pieces Gyoza, Gyoza sauce"));
  menu.appendChild(
    createMenuItem(
      "Chicken Karaage",
      "20 Pieces Marinated Chicken Karage Breading"
    )
  );
  menu.appendChild(createMenuItem("Chashu Rice", "Chashu Bits, Chashu Sauce"));
  menu.appendChild(
    createMenuItem("Butao King", "Tonkotsu Soup, Ramen Noodles, Pork Chashu")
  );
  menu.appendChild(
    createMenuItem(
      "Red King",
      "Tonkotsu Soup, Ramen Noodles, Pork Chashu, Red Minced Pork"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Black King",
      "Tonkotsu Soup, Ramen Noodles, Pork Chashu, Black Minced Pork"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Green King",
      "Tonkotsu Soup, Ramen Noodles, Pork Chashu, Green Oil, Vegetables"
    )
  );

  return menu;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
