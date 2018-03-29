//Btn effect
const btn = document.getElementById('navbar-btn');
const navbarMenu = document.getElementById('navbar-menu');
let opnenOrClose = 2;
// openOrClose%2 == 0 menu open
// openOrClose%2 == 1 menu menu close
function openMenu() {
    //AA
    if(opnenOrClose%2){
        btn.setAttribute('aria-label', 'Otwórz menu');
        btn.setAttribute('aria-expanded', 'false');
    }else{
        btn.setAttribute('aria-label', 'Zamknij menu');
        btn.setAttribute('aria-expanded', 'true');
    }
    opnenOrClose++;
    //
    for(let i=0; i<4;i++){
        btn.children[i].classList.toggle("open");
    }
    navbarMenu.classList.toggle("navbar-menu--open");
}
//AA
btn.setAttribute('type', 'button');
btn.setAttribute('aria-controls', 'menu');
btn.setAttribute('aria-label', 'Otwórz menu');

btn.addEventListener('click',openMenu, false);

// Scroll effect
window.onscroll = function() {showEffects()};
const navbar = document.getElementById('navbar');
const whenStart = navbar.offsetHeight;
function showEffects() {
    if (window.pageYOffset >= whenStart) {
        navbar.classList.add("wrapper--scroll");
    } else {
        navbar.classList.remove("wrapper--scroll");
    }
}


