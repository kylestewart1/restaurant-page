import bearPic from "./bear.jpeg"


const bearImage = document.createElement("img");
bearImage.src = bearPic;

const restaurantTitle = document.createElement("h1");
restaurantTitle.innerText = "Ella's Salmon";

const aboutContainer = document.createElement("div");
const about = document.createElement("p");
about.innerText = "The freshest salmon in Missouri!";
aboutContainer.classList.add("container");
aboutContainer.appendChild(about);

const hoursContainer = document.createElement("div");
const hours = document.createElement("p");
hours.innerText = "CLOSED INDEFINITELY";
hoursContainer.classList.add("container");
hoursContainer.appendChild(hours);


export { bearImage, restaurantTitle, aboutContainer, hoursContainer };