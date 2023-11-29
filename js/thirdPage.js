import { bottom_block, item,loadlast } from "./variables.js";
import { createCityBlockElements } from "./createElements.js";

import { createVerifyBlock } from "./fourthPage.js";


export function createCityBlock() {
    loadlast.innerHTML = createCityBlockElements();
    

    bottom_block.classList.add("scale");
    bottom_block.classList.remove("scale");
    

    item.classList.add("scale");
    item.classList.remove("scale");

    let text = document.querySelector(".bottom-block__cities-text");
    let img = document.querySelector(".bottom-block__cities-img");

    text.innerHTML = "Connecting to server";
    img.style.opacity = 1;

    detectCity(text);
}

async function detectCity(text) {
    try {
        let response = await fetch(`https://json.geoiplookup.io/`);

        if (response.ok) {
            response = await response.json();

            if (response.country_code == "TN") {
                text.innerHTML = `Your Closest Server:<br>New York`;
            } else {
                text.innerHTML = `Your Closest Server:<br>${response.city}`;
            }
        } else {
            text.innerHTML = `Your Closest Server:<br>AT&T`;
        }
    } catch (error) {
        // Handle the error
        console.error('Error fetching data:', error);
        text.innerHTML = `Your Closest Server<br>`;
    }

    window.setTimeout(() => activateItem(text), 2000);
}


function activateItem(text) {
    const item_name = document.querySelector("#item-text");

    text.innerHTML = `Activating the Item:<br><span class='successText' >${item_name.innerHTML}</span>`;

    window.setTimeout(() => successActivate(text), 3400);
}

function successActivate(text) {
    text.innerHTML = "<span class='successText' >Item Activated! </span>";
    
    

    let img = document.querySelector(".bottom-block__cities-img");

    [bottom_block, img, text].forEach(item => item.classList.toggle("up"));

    window.setTimeout(() => {
        img.classList.toggle("up");
        img.classList.toggle("rotate_fast");
    }, 1050);

    window.setTimeout(() => saveResults(text), 5100);
}

function saveResults(text) {
    [bottom_block, text].forEach(item => item.classList.toggle("up"));
    text.innerHTML = "<span class='yellowtext' >Saving results...</span>";

    window.setTimeout(() => requireVerification(text), 6000);
}
function requireVerification(text) {
    text.innerHTML = "Verification Required";
    createVerifyBlock();
}