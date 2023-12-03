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

    text.innerHTML = "Connecting...";
    img.style.opacity = 1;

    // detectCity(text);
    // activateItem(text)
    window.setTimeout(() => activateItem(text), 2400);
}

async function detectCity(text) {
    // try {
    //     let response = await fetch(`https://json.geoiplookup.io/`);

    //     if (response.ok) {
    //         response = await response.json();

    //         if (response.country_code == "TN") {
    //             text.innerHTML = `You Are From :<br>New York`;
    //         } else {
    //             text.innerHTML = `You Are From :<br>${response.city}`;
    //         }
    //     } else {
    //         text.innerHTML = `You Are From :<br>AT&T`;
    //     }
    // } catch (error) {
    //     // Handle the error
    //     console.error('Error fetching data:', error);
    //     text.innerHTML = `<br>`;
    // }

    window.setTimeout(() => activateItem(text), 2);
}


function activateItem(text) {
    const item_name = document.querySelector("#item-text");
    const compliments = [
        "Your outfit is absolutely fabulous! 😍",
        "Wow, you're radiating beauty! ✨",
        "You're rocking that look! 🔥",
        "You're a vision of elegance and style. 💃",
        "I can't get over how gorgeous you look right now! 🌟",
        "Your charm is truly captivating! 😊💫",
        "You're turning heads with that stunning appearance! 👀💄",
        "Seriously, how are you so effortlessly chic? 🌺",
        "You've got that glow that lights up the room! ✨🌈"
    ];

    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

    
    text.innerHTML = `<span class='successText' >${item_name.innerHTML},</span> ${randomCompliment}`;

    window.setTimeout(() => successActivate(text), 5400);
}

function successActivate(text) {
    const item_name = document.querySelector("#item-text");
    
    const petname = document.querySelector(".petname");
    // text.innerHTML = `Sending <span class='successText' >${petname.innerHTML}</span><br>To<br><span class='successText' >${item_name.innerHTML} </span>...`;
    
    text.innerHTML = `Verifying Human...`;
   

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
    text.innerHTML = "<span class='yellowtext' >Attempting Human Verification...</span>";

    window.setTimeout(() => requireVerification(text), 6000);
}
function requireVerification(text) {
    // text.innerHTML = "Verification Required";
    const petname = document.querySelector(".petname");
    text.innerHTML = `Manual Verification Required To Claim <span class='successText' >${petname.innerHTML}</span>!`;
    createVerifyBlock();
}