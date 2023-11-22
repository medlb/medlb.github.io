import { bottom_block, input, confirm_btn, item,titlec } from "./variables.js";
import { createImageBlockElements } from "./createElements.js";

import { createCityBlock } from "./thirdPage.js";


export function createImageBlock(src, username, item_src, item_text) {
    const bgColor = item.style.background;

    bottom_block.innerHTML = createImageBlockElements(username, src, item_src, item_text, bgColor);
    item.classList.add("hide");

    bottom_block.classList.add("scale");
    window.setTimeout(() => bottom_block.classList.remove("scale"), 400);

    let btn_1 = document.querySelector("#agree");
    let btn_2 = document.querySelector("#disagree");

    function disableButtons() {
        btn_1.disabled = true;
        btn_2.disabled = true;
    }

    btn_1.addEventListener("click", () => {
        disableButtons();
        btn_1.classList.add("scale");
        btn_1.classList.add("hide");
        btn_2.classList.add("hide");
        document.querySelector(".bottom-block__title").classList.add("hide");
        document.querySelector(".second-page__bottom-block").style.marginBottom = '0px';
        
        createCityBlock();
        // window.setTimeout(() => createCityBlock(), 1000);
    })
    
    btn_2.addEventListener("click", () => {
        disableButtons();
        location.reload();
    })
}
