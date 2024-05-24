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
        if(window.innerWidth > 420){
            reg.style.display = 'none';        navButton.style.color = 'white';
            line2.style.minWidth = '100%';
            line2.style.transform = "rotate(-45deg) scale(0.5, 0.5) translateY(-1.4vw)";
            line1.style.transform = "rotate(45deg) scale(0.5, 0.5) translateY(1.4vw)";
            line1.style.border = "0.16vw solid";
            line2.style.border = "0.16vw solid";
            homeNav.style.fontWeight = "500";
        }
        else{
            navButton.style.color = 'white';
            line2.style.minWidth = '100%';
            line2.style.transform = "rotate(-45deg) scale(0.5, 0.5) translateY(-4.2vw)";
            line1.style.transform = "rotate(45deg) scale(0.5, 0.5) translateY(4.2vw)";
            line1.style.border = "0.16vw solid";
            line2.style.border = "0.16vw solid";
            homeNav.style.fontWeight = "500";
        }
        setTimeout(() => slideNav(homeNav, "translateX(0px)"), 100);
        setTimeout(() => slideNav(charNav, "translateX(0px)"), 200);
        setTimeout(() => slideNav(dragonNav, "translateX(0px)"), 300);
        setTimeout(() => slideNav(isleNav, "translateX(0px)"), 400);
        setTimeout(() => slideNav(regNav, "translateX(0px)"), 500);
        setTimeout(() => homeNav.classList.add('active'), 900);
        setTimeout(() => lineHome.classList.add('active'), 900);

    }
    else {
        sideNav.style.maxWidth = '0px';
        lang.style.display = 'flex';
        if(window.innerWidth > 420){
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
        setTimeout(() => homeNav.classList.remove('active'), 900);
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

let title = document.querySelector('#title');
const rect = title.getBoundingClientRect();

let isVisible = ((window.scrollY + window.innerHeight) >= rect.top)

window.onscroll = () => {
    let news1 = document.querySelector('#news1')
    let news2 = document.querySelector('#news2')
    let news3 = document.querySelector('#news3')
    let news4 = document.querySelector('#news4')
    let news = document.querySelector('#news');
    let nav = document.querySelector('#nav-button');
    let lang = document.querySelector('#lang');
    let header = document.querySelector('#header');
    let newsPos = news1.getBoundingClientRect().top + news1.offsetHeight;
    let scrollPos2 = window.innerHeight + window.scrollY;
    var scrollPos = window.scrollY + header.offsetHeight;
    console.log(window.innerHeight + window.scrollY);
    console.log("news: " + (rect.top + title.offsetHeight));
    if(scrollPos >= news.offsetTop){
        nav.style.color = '#4A82A5';
        lang.style.color = '#4A82A5';
    }
    else{
        nav.style.color = '#ffffff';
        lang.style.color = '#ffffff';
    }
    if((window.innerHeight + window.scrollY) >= (rect.top + title.offsetHeight)){
        title.style.animationPlayState = 'running';
    }
    if(scrollPos2 >= newsPos){
        let more = document.querySelector('#more');
        news1.style.animationPlayState ='running';
        news2.style.animationPlayState ='running';
        news3.style.animationPlayState ='running';
        news4.style.animationPlayState ='running';
        more.style.animationPlayState = 'running';
        setTimeout(() => {
            news2.style.opacity = '100%';
          }, 1500);
        setTimeout(() => {
            news3.style.opacity = '100%';
          }, 2000);
        setTimeout(() => {
            news4.style.opacity = '100%';
          }, 2500);
        setTimeout(() => {
            more.style.opacity = '100%';
          }, 3000);
    }
}

let logo = document.querySelector('#logo')

logo.onclick = () =>{
    window.location.href = "home.html";
}

let regBtn = document.querySelector('#reg')

regBtn.onclick = () =>{
    window.location.href = "reg.html";
}