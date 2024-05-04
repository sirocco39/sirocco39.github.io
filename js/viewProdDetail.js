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

let bobimg = document.querySelector('#bob-tank');
let itemImg = document.querySelector('item');

let home = document.querySelector('#home');

home.onclick = () => {
    window.location.href = "viewAllProd.html";
}
