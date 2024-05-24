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
            regNav.style.fontWeight = "500";
        }
        else{
            navButton.style.color = 'white';
            line2.style.minWidth = '100%';
            line2.style.transform = "rotate(-45deg) scale(0.5, 0.5) translateY(-4.2vw)";
            line1.style.transform = "rotate(45deg) scale(0.5, 0.5) translateY(4.2vw)";
            line1.style.border = "0.16vw solid";
            line2.style.border = "0.16vw solid";
            regNav.style.fontWeight = "500";
        }
        setTimeout(() => slideNav(homeNav, "translateX(0px)"), 100);
        setTimeout(() => slideNav(charNav, "translateX(0px)"), 200);
        setTimeout(() => slideNav(dragonNav, "translateX(0px)"), 300);
        setTimeout(() => slideNav(isleNav, "translateX(0px)"), 400);
        setTimeout(() => slideNav(regNav, "translateX(0px)"), 500);
        setTimeout(() => regNav.classList.add('active'), 900);
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
        setTimeout(() => regNav.classList.remove('active'), 900);
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

let logo = document.querySelector('#logo')

logo.onclick = () =>{
    window.location.href = "home.html";
}

const form = document.getElementById('regForm');
const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const address = document.getElementById('address');
const email = document.getElementById('email');
const gender = document.getElementById('gender2')

const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
}

const validateEmail = (email) =>{
    let len = email.length;
    let i;
    let count = 0;
    for(i = 0; i < len; i++){
        if(email[i] === '@'){
            count++;
            if(count > 1) return false;
        }
    }
    for(i = 0; i < len; i++){
        if(email[i] ==='@'){
            if(i == 0) return false;
            if((email[i-1] >= 'a' && email[i-1] <= 'z') || (email[i-1] >= 'A' && email[i-1] <= 'Z') || (email[i-1] >= '0' && email[i-1] <= '9')){
                if((email[i+1] >= 'a' && email[i+1] <= 'z') || (email[i+1] >= 'A' && email[i+1] <= 'Z') || (email[i+1] >= '0' && email[i+1] <= '9')){
                    if(email[len-1] == 'm' && email[len-2] == 'o' && email[len-3] == 'c'  && email[len-4] === '.'){
                        return true;
                    }
                    return false;
                }
                return false;
            }
        }
    }
    return false;
}

const validateInput = (valid) =>{
    const fNameVal = fName.value.trim();
    const lNameVal = lName.value.trim();
    const addressVal = address.value.trim();
    const emailVal = email.value.trim();
    const maleRadio = document.getElementById('male');
    const femaleRadio = document.getElementById('female');

    if(fNameVal === '' || fNameVal === null){
        setError(fName, "First name must not be empty");
        valid.value = false;
    }
    else{
        setSuccess(fName);
    }
    if(lNameVal === '' || lNameVal === null){
        setError(lName, "Last name must not be empty");
        valid.value = false;
    }
    else{
        setSuccess(lName);
    }
    if(addressVal === '' || addressVal === null){
        setError(address, "Address must not be empty");
        valid.value = false;
    }
    else{
        setSuccess(address);
    }
    if(emailVal === '' || emailVal === null){
        setError(email, "Email must not be empty");
        valid.value = false;
    }
    else if(!validateEmail(emailVal)){
        setError(email, "Email address is not valid");
        valid.value = false;
    }
    else{
        setSuccess(email);
    }
    if(maleRadio.checked || femaleRadio.checked){
        setSuccess(gender);
    }
    else{
        setError(gender, "Gender must not be empty")
        valid.value = false;
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = {value: true}
    validateInput(valid);
    if(valid.value){
        form.submit();
    }
});
