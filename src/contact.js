function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const phoneNumber = document.createElement("h3");
  phoneNumber.textContent = "Contact Number: 0912-345-6789";

  const address = document.createElement("h3");
  address.textContent =
    "Address: 2 Chome-2-1 Dogenzaka, Shibuya 150-0043 Tokyo Prefecture";

  contact.appendChild(phoneNumber);
  contact.appendChild(address);

  return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;
