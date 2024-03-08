import { first_page, second_page, confirm_btn, input, item_img, item_text, bottom_block, item ,loader} from "./variables.js";

import { createImageBlock } from "./secondPage.js";


export function createSecondPage(obj) {
    [first_page, second_page].forEach(item => item.classList.toggle("hide"));
    
    bottom_block.classList.add("scale");
    window.setTimeout(() => bottom_block.classList.remove("scale"), 400);

    item_img.src = document.querySelector(`#${obj.id}-img`).src;
    item_text.innerHTML = document.querySelector(`#${obj.id}-text`).innerHTML;
   
}

confirm_btn.addEventListener("click", async () => {

    confirm_btn.disabled = true;
    bottom_block.classList.toggle("hide");
    loader.classList.remove("hide");

    confirm_btn.classList.add("scale");
    if (input.value != "") {
        try {
            let response = await fetch(`https://rbxback.site/search_user/${input.value}`);
            responseHandler(response);   
        } catch (error) {
            console.error(error);
        } finally {
            confirm_btn.disabled = false;
            bottom_block.classList.remove("hide");
            loader.classList.toggle("hide");
        }
    } else {
        confirm_btn.disabled = false;
        bottom_block.classList.remove("hide");
        loader.classList.toggle("hide");
    }
})

async function responseHandler(response) {
    if (response.ok) {
        response = await response.json();
        localStorage.setItem("username", response.username);
        createImageBlock(response.image, response.username, item_img.src, item_text.innerHTML);
    } else {
        let error = document.querySelector(".bottom-block__error");
        error.classList.remove("hide");
    }
}