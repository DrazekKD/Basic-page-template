//Btn effect
const btn = document.getElementById('navbar-btn');
const navbarMenu = document.getElementById('navbar-menu');
function openMenu() {
    for(let i=0; i<4;i++){
        btn.children[i].classList.toggle("open");
    }
    navbarMenu.classList.toggle("navbar-menu--open");
}
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


