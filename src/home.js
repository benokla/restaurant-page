
export function displayHome() {
    const content = document.querySelector("#content");

    const homeWrapper = document.createElement("div");
    homeWrapper.classList.add(".homeWrapper")

    const h1 = document.createElement("h1");
    h1.textContent = "Pizza Knote";
    h1.classList.add("homeHeader")
    
    const p1 = document.createElement("p");
    p1.textContent = "Best Pizza in Ingolstadt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, culpa.";

    const img = document.createElement("div");
    img.setAttribute("id", "backgroundImage");

    homeWrapper.appendChild(h1)
    homeWrapper.appendChild(p1)
    homeWrapper.appendChild(img)
    content.appendChild(homeWrapper)
}


