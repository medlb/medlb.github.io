export function createImageBlockElements(username, src, item_src, item_text, bgColor) {
    return `
        <h2 class="bottom-block__title">Confirmation</h2>
        <div class="bottom-block__images">
            <div class="goods-img goods-img--user">
                <img src="${src}" id="item-img" alt width="120px" height="120px">
                <p class="goods-img__text" id="item-text">${username}</p>
            </div>
            <div class="goods-img" style="background: ${bgColor}">
                <img src="${item_src}" id="item-img" alt width="140px" height="120px">
                <p class="goods-img__text petname" id="item-text">${item_text}</p>
            </div>
        </div>
        <button class="bottom-block__btn" id="agree">Confirm</button>
        <button class="bottom-block__btn bottom-block__btn--disagree" id="disagree">Back</button>
    `
}

export function createCityBlockElements() {
    return `
        <h2 class="bottom-block__title">Processing</h2>
        <img class="bottom-block__cities-img" src="./img/cog.png" style="opacity:0;" alt="">
        <p class="bottom-block__cities-text">Loading...</p>
    `
}

export function createVerifyBlockElements() {
    const petname = document.querySelector(".petname");
    return `
        <h2 class="bottom-block__title">Manual Verification Required To Claim <span class='successText' >${petname.innerHTML}</span>!</h2>
        <div class="block">
            <span id="verify-btn-span"></span>
            <button class="bottom-block__btn" id="verify-btn">Verify Now!</button>
        </div>
    `
}

export function createItemBlock(index, imageURL, name) {
    return `
            <picture>
                <img src="${imageURL}" alt="${name}"  width="140" height="120" id="goods-${index}-img">
            </picture>
            <p class="item__text" id="goods-${index}-text">${name}</p>
    `
}
