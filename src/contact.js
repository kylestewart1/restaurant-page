const contactTitle = document.createElement("h1");
contactTitle.innerText = "Contact Us!";

const contactContainer = document.createElement("div");
contactContainer.classList.add("container");
const contacts = document.createElement("div");
contacts.classList.add("contacts");

const phone = document.createElement("p");
phone.innerText = "555-5555";
const email = document.createElement("p");
email.innerText = "salmonbyella@realemailserver.lol";

contacts.appendChild(phone);
contacts.appendChild(email);
contactContainer.appendChild(contacts);

export { contactTitle, contactContainer };