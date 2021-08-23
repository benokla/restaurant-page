import {displayHome} from "./home"
import {displayMenu, showMenu} from "./menu"

(() => {
    const content = document.querySelector("#content");
    const navHome = document.querySelector("#navHome");
    const navMenu = document.querySelector("#navMenu");

    displayHome();

    navHome.addEventListener("click", (e) => {
        content.innerHTML = "";
        displayHome();
    })
    navMenu.addEventListener("click", (e) => {
        content.innerHTML = "";
        displayMenu();
        showMenu();
    })
})();
