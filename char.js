let sideNav = document.querySelector('#side-nav');
let navButton = document.querySelector('#nav-button');
let lang = document.querySelector('#lang');
let reg = document.querySelector('#reg');
let line2 = document.querySelector('#line2');
let line1 = document.querySelector('#line1');
let homeNav = document.querySelector('#home');
let charNav = document.querySelector('#char');
let dragonNav = document.querySelector('#dragon');
let isleNav = document.querySelector('#isle');
let regNav = document.querySelector('#register');
let lineHome = document.querySelector('#lineHome');


navButton.onclick = () => {
    if (sideNav.style.maxWidth == '0px') {
        sideNav.style.maxWidth = '100%';
        lang.style.display = 'none';
        if (window.innerWidth > 420) {
            reg.style.display = 'none';
            navButton.style.color = 'white';
            line2.style.minWidth = '100%';
            line2.style.transform = "rotate(-45deg) scale(0.5, 0.5) translateY(-1.4vw)";
            line1.style.transform = "rotate(45deg) scale(0.5, 0.5) translateY(1.4vw)";
            line1.style.border = "0.16vw solid";
            line2.style.border = "0.16vw solid";
            charNav.style.fontWeight = "500";
        }
        else {
            navButton.style.color = 'white';
            line2.style.minWidth = '100%';
            line2.style.transform = "rotate(-45deg) scale(0.5, 0.5) translateY(-4.2vw)";
            line1.style.transform = "rotate(45deg) scale(0.5, 0.5) translateY(4.2vw)";
            line1.style.border = "0.16vw solid";
            line2.style.border = "0.16vw solid";
            charNav.style.fontWeight = "500";
        }
        setTimeout(() => slideNav(homeNav, "translateX(0px)"), 100);
        setTimeout(() => slideNav(charNav, "translateX(0px)"), 200);
        setTimeout(() => slideNav(dragonNav, "translateX(0px)"), 300);
        setTimeout(() => slideNav(isleNav, "translateX(0px)"), 400);
        setTimeout(() => slideNav(regNav, "translateX(0px)"), 500);
        setTimeout(() => charNav.classList.add('active'), 900);
        setTimeout(() => lineHome.classList.add('active'), 900);

    }
    else {
        sideNav.style.maxWidth = '0px';
        lang.style.display = 'flex';
        if (window.innerWidth > 420) {
            reg.style.display = 'flex';
        }
        navButton.style.color = '#4A82A5';
        line2.style.transform = "rotate(0)";
        line1.style.transform = "rotate(0)";
        line2.style.minWidth = '70%';
        setTimeout(() => slideNav(homeNav, "translateX(300px)"), 100);
        setTimeout(() => slideNav(charNav, "translateX(300px)"), 200);
        setTimeout(() => slideNav(dragonNav, "translateX(300px)"), 300);
        setTimeout(() => slideNav(isleNav, "translateX(300px)"), 400);
        setTimeout(() => slideNav(regNav, "translateX(300px)"), 500);
        setTimeout(() => charNav.classList.remove('active'), 900);
        setTimeout(() => lineHome.classList.remove('active'), 900);
    }
}

navButton.onmouseover = () => {
    line2.style.maxWidth = '100%';
}

navButton.onmouseout = () => {
    line2.style.maxWidth = '70%';
}

function slideNav(part, x) {
    part.style.transform = x;
}

function hoverRight(part) {
    part.onmouseover = () => {
        part.style.transform = "translateX(1vw)";
    }
    part.onmouseout = () => {
        part.style.transform = "translateX(-1vw)";
    }
}

hoverRight(homeNav);
hoverRight(charNav);
hoverRight(dragonNav);
hoverRight(isleNav);
hoverRight(regNav);

let chNameArr = ['Siti', 'Joko', 'Abdi', 'Nur', 'Bagus', 'Ilham']
let chTitleArr = ['Skybound Protector', 'Skybound Soldier', 'Dragontamer', 'Tiny Justice', 'Transient Mr. Fix-It', 'Foreboding Blade']
let chDescArr = ['Siti once swore an oath of knighthood to the Erste Empire, but those days are long behind her. Her knightly duty continues, though now in the service of protecting Zen Dragon Academy.'
    , 'A veteran skyfarer whose combat prowess is rivaled only by his regret.'
    , 'Once reviled as a traitor, that didn\'t stop this loyal knight from heroically saving his kingdom from crisis'
    , 'The captain of an order of holy knights, all of whom have sworn a sacred pledge. Her sword, a weapon that cleaves evil in twain, is equal to her in both size and power.'
    , 'A proper gentlemen who calls the westerly skies home. The first time you meet him is purely by happenstance, but he decides to travel with you for the moment.'
    , 'This mysterious swordsman stands in your way at every turn. Always calm and collected, nothing seems to faze him.'
]
let chImgArr = ['url(/Assets/katalina.png)'
    , 'url(/Assets/eugen1.png)'
    , 'url(/Assets/siegfried.png)'
    , 'url(/Assets/charlotta.png)'
    , 'url(/Assets/rolan.png)'
    , 'url(/Assets/id.png)'
]

let chName = document.querySelector('#char-name')
let chTitle = document.querySelector('#char-title')
let chDesc = document.querySelector('#char-desc')
let chImg = document.querySelector('#char-img')

let ch1 = document.querySelector('#char1')
let ch2 = document.querySelector('#char2')
let ch3 = document.querySelector('#char3')
let ch4 = document.querySelector('#char4')
let ch5 = document.querySelector('#char5')
let ch6 = document.querySelector('#char6')

let currLoc = 0

function changeOnClick(trigger, name, title, desc, img, newLoc) {
    trigger.onclick = () => {
        chName.innerHTML = name;
        chTitle.innerHTML = title;
        chDesc.innerHTML = desc;
        chImg.style.backgroundImage = img;
        currLoc = newLoc;
        chImg.style.animation = 'none';
        setTimeout(() => {
          chImg.style.animation = '';
        }, 0);
        chName.style.animation = 'none';
        setTimeout(() => {
          chName.style.animation = '';
        }, 0);
        chTitle.style.animation = 'none';
        setTimeout(() => {
          chTitle.style.animation = '';
        }, 0);
        chDesc.style.animation = 'none';
        setTimeout(() => {
          chDesc.style.animation = '';
        }, 0);
    }
}

changeOnClick(ch1, chNameArr[0], chTitleArr[0], chDescArr[0], chImgArr[0], 0)
changeOnClick(ch2, chNameArr[1], chTitleArr[1], chDescArr[1], chImgArr[1], 1)
changeOnClick(ch3, chNameArr[2], chTitleArr[2], chDescArr[2], chImgArr[2], 2)
changeOnClick(ch4, chNameArr[3], chTitleArr[3], chDescArr[3], chImgArr[3], 3)
changeOnClick(ch5, chNameArr[4], chTitleArr[4], chDescArr[4], chImgArr[4], 4)
changeOnClick(ch6, chNameArr[5], chTitleArr[5], chDescArr[5], chImgArr[5], 5)

function change(name, title, desc, img, newLoc) {
    chName.innerHTML = name;
    chTitle.innerHTML = title;
    chDesc.innerHTML = desc;
    chImg.style.backgroundImage = img;
    currLoc = newLoc;
    chImg.style.animation = 'none';
    setTimeout(() => {
      chImg.style.animation = '';
    }, 10);
    chName.style.animation = 'none';
    setTimeout(() => {
      chName.style.animation = '';
    }, 10);
    chTitle.style.animation = 'none';
    setTimeout(() => {
      chTitle.style.animation = '';
    }, 10);
    chDesc.style.animation = 'none';
    setTimeout(() => {
      chDesc.style.animation = '';
    }, 10);
}

let prevBtn = document.querySelector('#prev')
let nextBtn = document.querySelector('#next')

prevBtn.onclick = () => {
    if (currLoc == 0) {
        currLoc = 5;
    }
    else {
        currLoc -= 1;
    }
    change(chNameArr[currLoc], chTitleArr[currLoc], chDescArr[currLoc], chImgArr[currLoc], currLoc)
}

nextBtn.onclick = () => {
    if (currLoc == 5) {
        currLoc = 0;
    }
    else {
        currLoc += 1;
    }
    change(chNameArr[currLoc], chTitleArr[currLoc], chDescArr[currLoc], chImgArr[currLoc], currLoc)
}

let logo = document.querySelector('#logo')

logo.onclick = () =>{
    window.location.href = "home.html";
}

let regBtn = document.querySelector('#reg')

regBtn.onclick = () =>{
    window.location.href = "reg.html";
}