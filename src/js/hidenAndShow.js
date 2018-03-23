const sections = new Array(4);

function toggleAccordion() {
    const number = this.id.toString().slice(-1);
    for(let i=1;i<=4;i++){
        sections[i].classList.remove('active');
    }
    this.classList.add('active');
}

for(let i=1;i<=4;i++){
    sections[i] = document.getElementById(`section${i}`);
    sections[i].addEventListener('click', toggleAccordion);
}

const topOffset = document.getElementById('topOffset');
const whenHiddenOpensSections =  topOffset.offsetTop;
function closeSection() {
    if(window.pageYOffset === whenHiddenOpensSections){
        for(let i=1;i<=4;i++){
            sections[i].classList.remove('active');
        }
    }
}

window.onscroll = function() {closeSection(),showEffects()};






