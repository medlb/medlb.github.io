import { createSecondPage } from "./firstPage.js";
import { section, item } from "./variables.js";
import { createItemBlock } from "./createElements.js";
import { data } from "./data.js";


document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
            "#loader").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
    }
};
createElements();

function createElements() {
    for (let i = 0; i < data.length; i++) {
        let block = document.createElement("div");
        block.classList.add("box");
    
        block.innerHTML = createItemBlock(i, data[i].imageURL, data[i].name);
        
        
        
    
        section.append(block);
    }

    const items = document.querySelectorAll(".wholepet");

    items.forEach(obj => obj.addEventListener("click", () => {
        
        localStorage.clear();
        createSecondPage(obj);
    }))
}

// window.setInterval(() => {
//     const usernames = [];

//     for (let i = 1; i < 4; i++) {
//         let img = document.querySelector(`#winner-${i}-img`);
//         img.src = `./img/items/${randomIntFromInterval(0, 20)}.webp`;
        
//         let text = document.querySelector(`#winner-${i}-text`);
//         text.innerHTML = users.filter(item => !usernames.includes(item))[randomIntFromInterval(0, users.length - 5)];

//         usernames.push(text.innerHTML);

//         let time = document.querySelector(`#winner-${i}-time`);
//         switch (i) {
//             case 1: 
//                 time.innerHTML = `${randomIntFromInterval(1, 20)} sec ago`;
//                 break;
//             case 2:
//                 time.innerHTML = `${randomIntFromInterval(20, 40)} sec ago`;
//                 break;
//             case 3:
//                 time.innerHTML = `${randomIntFromInterval(40, 50)} sec ago`;
//                 break;
//             default:
//                 break;
//         }
//     }
//     items.forEach(item => item.style.opacity = 1)
// }, 10000);

// window.setTimeout(() => {
//     window.setInterval(() => items.forEach(item => item.style.opacity = 0), 10000);
//     items.forEach(item => item.style.opacity = 0);
// }, 9600);

// function randomIntFromInterval(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }
