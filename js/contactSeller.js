let trigger = document.querySelector('#trigger');
let menu = document.querySelector('#sidebar');
let o=0

// console.log(trigger);


function dropdown(trigger, menu){
    let open = false;
    trigger.onclick = () =>{
        if(open == false){
            menu.style.display = 'block';
            open = true;
        }
        else{
            menu.style.display = 'none';
            open = false;
        }
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
let itemImg = document.querySelector('item');

let trdButton = document.querySelector('#trade-bubble');
let trdScreen = document.querySelector('#trade-screen');

trigger.onclick = () =>{
    // alert("tes");
    if(o==1){
        menu.classList.remove('active');
        elecMenu.style.display = 'none';
        homeMenu.style.display = 'none';
        autoMenu.style.display = 'none';
        sportMenu.style.display = 'none';
        o=0;
    }else{
        menu.classList.add('active');
        o=1;
    }
}

trdButton.onclick = () => {
    trdScreen.style.display = 'flex';
}

let cancelButton = document.querySelector('#cancel');
let acceptButton = document.querySelector('#accept');
let trdConfirm = document.querySelector('#trade-confirm');
let trdCancelButton = document.querySelector('#option-cancel');
let trdAcceptButton = document.querySelector('#option-accept');
let trdBubble = document.querySelector('#trade-bubble');
let thanks = document.querySelector('#thanks');

cancelButton.onclick = () => {
    trdScreen.style.display = 'none';
}

acceptButton.onclick = () => {
    trdConfirm.style.display = 'flex';
}

trdCancelButton.onclick = () => {
    trdConfirm.style.display = 'none';
}

trdAcceptButton.onclick = () => {
    trdConfirm.style.display = 'none';
    trdScreen.style.display = 'none';
    trdBubble.textContent = "TRADE SUCCESS";
    trdBubble.style.fontWeight = '700';
    trdBubble.style.backgroundColor = "#003f7d";
    thanks.style.display = 'flex';
}

let chat1 = document.querySelector('#chat1');

function showChat(chatId){
    chatId.style.display = 'flex';
}

setTimeout(() => showChat(chat1), 3000);
setTimeout(() => showChat(trdBubble), 6000);

let home = document.querySelector('#home');

home.onclick = () => {
    window.location.href = "viewAllProd.html";
}
