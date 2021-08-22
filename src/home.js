export function displayHome() {
    const content = document.querySelector("#content");
    
    const h1 = document.createElement("h1");
    h1.textContent = "Pizza Knote";
    h1.classList.add("homeHeader")
    
    const p1 = document.createElement("p");
    p1.textContent = "Best Pizza in Ingolstadt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, culpa.";

    const img = document.createElement("div");
    img.setAttribute("id", "backgroundImage");

    content.appendChild(h1)
    content.appendChild(p1)
    content.appendChild(img)
}