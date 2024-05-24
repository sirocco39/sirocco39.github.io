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
            reg.style.display = 'none'; navButton.style.color = 'white';
            line2.style.minWidth = '100%';
            line2.style.transform = "rotate(-45deg) scale(0.5, 0.5) translateY(-1.4vw)";
            line1.style.transform = "rotate(45deg) scale(0.5, 0.5) translateY(1.4vw)";
            line1.style.border = "0.16vw solid";
            line2.style.border = "0.16vw solid";
            dragonNav.style.fontWeight = "500";
        }
        else {
            navButton.style.color = 'white';
            line2.style.minWidth = '100%';
            line2.style.transform = "rotate(-45deg) scale(0.5, 0.5) translateY(-4.2vw)";
            line1.style.transform = "rotate(45deg) scale(0.5, 0.5) translateY(4.2vw)";
            line1.style.border = "0.16vw solid";
            line2.style.border = "0.16vw solid";
            dragonNav.style.fontWeight = "500";
        }
        setTimeout(() => slideNav(homeNav, "translateX(0px)"), 100);
        setTimeout(() => slideNav(charNav, "translateX(0px)"), 200);
        setTimeout(() => slideNav(dragonNav, "translateX(0px)"), 300);
        setTimeout(() => slideNav(isleNav, "translateX(0px)"), 400);
        setTimeout(() => slideNav(regNav, "translateX(0px)"), 500);
        setTimeout(() => dragonNav.classList.add('active'), 900);
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
        setTimeout(() => dragonNav.classList.remove('active'), 900);
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

let h2Arr = ['Guardians of the Realm', 'Keepers of Knowledge', 'Masters of Healing', 'Champions of Battle'];
let pArr = ['Sentinel Dragons are the stalwart protectors of Zen Dragon Academy, dedicated to safeguarding their home and allies with unwavering loyalty and strength. These dragons possess an innate sense of duty and vigilance, always on alert to defend against any threat. Their scales are often a steely grey or deep blue, symbolizing their resolve and determination. Sentinels are known for their immense physical strength, thick armor-like scales, and powerful defensive abilities. They can create protective barriers, withstand intense attacks, and are skilled in combat tactics. Their presence is a reassuring force, embodying the essence of protection and security', 'Sage Dragons are the wise and learned scholars of Zen Dragon Academy, dedicated to the pursuit and preservation of knowledge. These dragons are deeply respected for their intellect and insight, often serving as mentors and advisors to both dragons and humans. Sages possess a calm and contemplative demeanor, with scales that shimmer in hues of gold and silver, reflecting their enlightened minds. They have a vast repertoire of ancient lore, magical spells, and strategic wisdom. Sage Dragons are adept at arcane magic, able to manipulate mystical energies for various purposes, from creating powerful enchantments to divining hidden truths. Their guidance is invaluable, fostering wisdom and growth within the academy.', 'Aegis Dragons are the compassionate healers of Zen Dragon Academy, devoted to the art of restoration and rejuvenation. These dragons embody empathy and kindness, always ready to mend wounds and cure ailments. Their scales often glisten with soothing colors like soft greens and gentle purples, symbolizing their healing nature. Aegis Dragons have a deep connection to life forces and natural energies, allowing them to heal physical injuries, cure diseases, and even rejuvenate the spirit. They possess unique abilities to channel restorative magic, create healing potions, and nurture the well-being of their companions. Their presence brings comfort and renewal, embodying the essence of compassion and care.', 'Vanguard Dragons are the fierce and valiant warriors of Zen Dragon Academy, embodying the spirit of strength and courage. These dragons are fearless in the face of danger, always ready to lead the charge and engage in combat to protect their home and allies. Vanguards are characterized by their robust and muscular forms, with scales that often blaze in fiery reds and bold oranges, reflecting their fiery spirit. They are masters of physical combat, with powerful claws, teeth, and breath attacks that can decimate foes. Vanguard Dragons possess unparalleled combat skills, strategic prowess, and an indomitable will. Their bravery and strength inspire all, embodying the essence of valor and determination.',]
let imgArr = ['url(/Assets/sentinel2.jpg)'
, 'url(/Assets/sage.jpg'
, 'url(/Assets/aegis.jpg)'
, 'url(/Assets/vanguard2.jpg)']

let cls1 = document.querySelector('#cls1');
let cls2 = document.querySelector('#cls2');
let cls3 = document.querySelector('#cls3');
let cls4 = document.querySelector('#cls4');
cls1.classList.add('active');
let cls1On = true;
let cls2On = false;
let cls3On = false;
let cls4On = false;


function hoverClass(trigger){
    trigger.onmouseover = () => {
        trigger.classList.add('hover');
    }
    trigger.onmouseout = () => {
        trigger.classList.remove('hover');
    }
}

hoverClass(cls1);
hoverClass(cls2);
hoverClass(cls3);
hoverClass(cls4);

function change(trigger, newName, newDesc, newImg, status){
    let name = document.querySelector('#name');
    let desc = document.querySelector('#desc');
    let image = document.querySelector('#img');
    let lb = document.querySelector('#lb');
    trigger.onclick = () => {
        cls1.classList.remove('active');
        cls2.classList.remove('active');
        cls3.classList.remove('active');
        cls4.classList.remove('active');
        cls1On = false;
        cls2On = false;
        cls3On = false;
        cls4On = false;
        trigger.classList.add('active');
        status = true;
        name.innerHTML = newName;
        desc.innerHTML = newDesc;
        image.style.backgroundImage = newImg;
        name.style.animation = 'none';
        setTimeout(() => {
          name.style.animation = '';
        }, 0);
        desc.style.animation = 'none';
        setTimeout(() => {
          desc.style.animation = '';
        }, 0);
        lb.style.animation = 'none';
        setTimeout(() => {
          lb.style.animation = '';
        }, 0);
        image.style.animation = 'none';
        setTimeout(() => {
          image.style.animation = '';
        }, 0);

    }
}

change(cls1, h2Arr[0], pArr[0], imgArr[0], (value) => cls1On = value);
change(cls2, h2Arr[1], pArr[1], imgArr[1], (value) => cls2On = value);
change(cls3, h2Arr[2], pArr[2], imgArr[2], (value) => cls3On = value);
change(cls4, h2Arr[3], pArr[3], imgArr[3], (value) => cls4On = value);

let logo = document.querySelector('#logo')

logo.onclick = () =>{
    window.location.href = "home.html";
}

let regBtn = document.querySelector('#reg')

regBtn.onclick = () =>{
    window.location.href = "reg.html";
}