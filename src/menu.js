let menu = [];

export function displayMenu() {
    const content = document.querySelector("#content");
    const menuWrapper = document.createElement("div");
    menuWrapper.classList.add("menuWrapper");

    const h1 = document.createElement("h1");
    h1.textContent = "MENU"
    h1.classList.add("homeHeader");

    menuWrapper.appendChild(h1)
    content.appendChild(menuWrapper)
}

function createMenu() {
    function Pizza(title, text, img) {
        this.title = title;
        this.text = text;
        this.img = img;
    }

    let barbecueLovers = new Pizza("Barbecue Lover's", "Bacon, Rinderhack, rote Zwiebeln, Mozzarella, Barbecuesauce", "https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/DE/PH/MENU/PreviewDI/Barbecue%20Lovers%20Baked.png");
    let cheeseLovers = new Pizza("Cheese Lover's", "Hirtenkäse, Cheddar, Gouda, Mozzarella, Tomatensauce", "https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/DE/PH/MENU/PreviewDI/Cheese%20Lovers%20Baked.png");
    let gardenLovers = new Pizza("Garden Lover's", "Champignons, Paprika-Mix, Tomatenscheiben, Mozzarella, Tomatensauce", "https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/DE/PH/MENU/PreviewDI/Garden%20Lovers%20Baked.png");
    let peperoniLovers = new Pizza("Pepperoni Lover's", "Rinderpeperoniwurst, Mozzarella, Tomatensauce", "https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/DE/PH/MENU/PreviewDI/Pepperoni%20Lovers%20Baked%20%281%29.png");
    
    menu.push(barbecueLovers, cheeseLovers, gardenLovers, peperoniLovers);
}

export function showMenu() {
    createMenu();
    menu.forEach(pizza => {
        console.log(pizza)
        const menuWrapper = document.querySelector(".menuWrapper")
        const pizzaContainer = document.createElement("div");
        pizzaContainer.classList.add("pizzaContainer");

        const pizzaTitle = document.createElement("h2");
        pizzaTitle.setAttribute("id", "pizzaTitle");
        pizzaTitle.textContent = pizza.title;

        const pizzaText = document.createElement("p");
        pizzaText.setAttribute("id", "pizzaText");
        pizzaText.textContent = pizza.text;

        const pizzaImg = document.createElement("img");
        pizzaImg.setAttribute("id", "pizzaImg");
        pizzaImg.setAttribute("src", pizza.img);

        pizzaContainer.appendChild(pizzaTitle)
        pizzaContainer.appendChild(pizzaText)
        pizzaContainer.appendChild(pizzaImg)
        menuWrapper.appendChild(pizzaContainer)
    });
}

export {menu}


