import "./styles.css"
import { bearImage, restaurantTitle, aboutContainer, hoursContainer } from "./home.js";
import { menu } from "./menu.js";
import { contactTitle, contactContainer } from "./contact.js";

const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const contactButton = document.getElementById("contact-button");

const contentDiv = document.getElementById("content");


function unclickTabs() {
    document.querySelectorAll("button").forEach(btn => {
        btn.classList.remove("current-tab");
    })
}

function viewHome() {
    unclickTabs();
    homeButton.classList.add("current-tab");
    contentDiv.innerHTML = "";
    contentDiv.appendChild(bearImage);
    contentDiv.appendChild(restaurantTitle);
    contentDiv.appendChild(aboutContainer);
    contentDiv.appendChild(hoursContainer);
}

function viewMenu() {
    unclickTabs();
    menuButton.classList.add("current-tab");
    contentDiv.innerHTML = "";
    menu.forEach(item => {
        contentDiv.appendChild(item);
    });
}

function viewContact() {
    unclickTabs();
    contactButton.classList.add("current-tab");
    contentDiv.innerHTML = "";
    contentDiv.appendChild(contactTitle);
    contentDiv.appendChild(contactContainer);
}

homeButton.addEventListener("click", viewHome);
menuButton.addEventListener("click", viewMenu);
contactButton.addEventListener("click", viewContact);

viewHome();


