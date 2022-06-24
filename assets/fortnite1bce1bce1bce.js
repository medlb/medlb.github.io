const rarity = ['common', 'uncommon', 'rare', 'epic', 'legendary'];
let selectedSkinsAmount = 0;
let selectedSkinsNames = [];

const Items = [
    {
        name: 'Giraffe',
        url: 'https://i.imgur.com/sqQcEhn.png',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Bat Dragon',
        url: 'https://i.imgur.com/V1hMMIf.png',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Shadow Dragon',
        url: 'https://i.imgur.com/p0g1SgN.png',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Frost Dragon',
        url: 'https://i.imgur.com/zqNToTu.png',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Queen Bee',
        url: 'https://i.imgur.com/iZNpQYj.png',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Owl',
        url: 'https://i.imgur.com/fnvTz51.png',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Crow',
        url: 'https://i.imgur.com/hioo518.png',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Kangaroo',
        url: 'https://i.imgur.com/6fHNPJ8.png',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Turtle',
        url: 'https://i.imgur.com/4bATiTu.png',
        rarity: 'legendary',
        iconSeries: false
    },    
    {
        name: 'Arctic Reindeer',
        url: 'https://i.imgur.com/mXnhNxX.png',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Parrot',
        url: 'https://i.imgur.com/XeaJapJ.png',
        rarity: 'legendary',
        iconSeries: false
    },
    {
        name: 'Kitsune',
        url: 'https://i.imgur.com/4v6YUsG.png',
        rarity: 'legendary',
        iconSeries: false
    },
]

for (let i = 0; i < Items.length; i++) {
    document.querySelector('#load ul').innerHTML += `
        <div class="col-md-3 col-md-6">
            ${Items[i].iconSeries ? '<img src="https://cdn.discordapp.com/attachments/388822513787863040/732185639218315324/icon-logo.png" class="iconSeries" />' : ''}
            <a class="card splash-card" data-rarity="${Items[i].rarity}">
                <picture>
                    <img class="card-img-top desktop-img pickaxe" src=${Items[i].url}>
                </picture>
                <div class="card-img-overlay">
                    <div class="card-body itemdesc-box">
                        <h4 class="card-title itemname">${Items[i].name}</h4>
                    </div>
                </div>
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
