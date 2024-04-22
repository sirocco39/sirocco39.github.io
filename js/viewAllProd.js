let trigger = document.querySelector('#trigger');
let menu = document.querySelector('#sidebar');
let o=0

// console.log(trigger);

trigger.onclick = () =>{
    // alert("tes");
    if(o==1){
        menu.classList.remove('active');
        o=0;
    }else{
        menu.classList.add('active');
        o=1;
    }
}

function dropdown(trigger, menu){
    trigger.onmouseover = () =>{
        menu.classList.add('active');
    }
    trigger.onmouseout = () => {
        menu.classList.remove('active');
    }
}

let elecTrigger = document.querySelector('#elecs');
let elecMenu = document.querySelector('#elec');
dropdown(elecTrigger, elecMenu);

let homeTrigger = document.querySelector('#homeTrig');
let homeMenu = document.querySelector('#homeMenu');
dropdown(homeTrigger, homeMenu);

let autoTrigger = document.querySelector('#autoTrig');
let autoMenu = document.querySelector('#autoMenu');
dropdown(autoTrigger, autoMenu);

let sportTrigger = document.querySelector('#sportTrig');
let sportMenu = document.querySelector('#sportMenu');
dropdown(sportTrigger, sportMenu);

let bobimg = document.querySelector('#bob-tank');

bobimg.onclick = () =>{
    window.location.href = "viewProdDetail.html";
}

let home = document.querySelector('#home');

home.onclick = () => {
    window.location.href = "viewAllProd.html";
}