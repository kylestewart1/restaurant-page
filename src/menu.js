const menuTitle = document.createElement("h1");
menuTitle.innerText = "Menu";

const menu = [];

function createMenuItem(name, price) {
    const container = document.createElement("div");
    container.classList.add("menu-item-container");

    const menuItem =document.createElement("div");
    menuItem.classList.add("menu-item");

    const nameParagraph = document.createElement("p");
    nameParagraph.innerText = name;
    const priceParagraph = document.createElement("p");
    priceParagraph.innerText = price;

    menuItem.appendChild(nameParagraph);
    menuItem.appendChild(priceParagraph);
    container.appendChild(menuItem);

    return container;
}

menu.push(createMenuItem("Salmon Sashimi", "$20"));
menu.push(createMenuItem("Smoked Salmon Dinner", "$25"));
menu.push(createMenuItem("Salmonwich", "$15"));

export { menu };