(()=>{"use strict";function e(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add(".homeWrapper");const n=document.createElement("h1");n.textContent="Pizza Knote",n.classList.add("homeHeader");const d=document.createElement("p");d.textContent="Best Pizza in Ingolstadt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, culpa.";const o=document.createElement("div");o.setAttribute("id","backgroundImage"),t.appendChild(n),t.appendChild(d),t.appendChild(o),e.appendChild(t)}let t=[];(()=>{const n=document.querySelector("#content"),d=document.querySelector("#navHome"),o=document.querySelector("#navMenu");e(),d.addEventListener("click",(t=>{n.innerHTML="",e()})),o.addEventListener("click",(e=>{n.innerHTML="",function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("menuWrapper");const n=document.createElement("h1");n.textContent="MENU",n.classList.add("homeHeader"),t.appendChild(n),e.appendChild(t)}(),function(){function e(e,t,n){this.title=e,this.text=t,this.img=n}let n=new e("Barbecue Lover's","Bacon, Rinderhack, rote Zwiebeln, Mozzarella, Barbecuesauce","https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/DE/PH/MENU/PreviewDI/Barbecue%20Lovers%20Baked.png"),d=new e("Cheese Lover's","Hirtenkäse, Cheddar, Gouda, Mozzarella, Tomatensauce","https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/DE/PH/MENU/PreviewDI/Cheese%20Lovers%20Baked.png"),o=new e("Garden Lover's","Champignons, Paprika-Mix, Tomatenscheiben, Mozzarella, Tomatensauce","https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/DE/PH/MENU/PreviewDI/Garden%20Lovers%20Baked.png"),a=new e("Pepperoni Lover's","Rinderpeperoniwurst, Mozzarella, Tomatensauce","https://ocs-pl.oktawave.com/v1/AUTH_876e5729-f8dd-45dd-908f-35d8bb716177/amrest-web-ordering/DE/PH/MENU/PreviewDI/Pepperoni%20Lovers%20Baked%20%281%29.png");t.push(n,d,o,a)}(),t.forEach((e=>{const t=document.querySelector(".menuWrapper"),n=document.createElement("div");n.classList.add("pizzaContainer");const d=document.createElement("h2");d.setAttribute("id","pizzaTitle"),d.textContent=e.title;const o=document.createElement("p");o.setAttribute("id","pizzaText"),o.textContent=e.text;const a=document.createElement("img");a.setAttribute("id","pizzaImg"),a.setAttribute("src",e.img),n.appendChild(d),n.appendChild(o),n.appendChild(a),t.appendChild(n)}))}))})()})();