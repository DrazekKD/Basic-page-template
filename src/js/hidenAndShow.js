const sections = new Array(4);

function toggleAccordion() {
    const number = this.id.toString().slice(-1);
    for(let i=1;i<=4;i++){
        sections[i].classList.remove('active');
        switch (number){
            case '1':{
                sections[2].classList.remove('slim1');
                sections[3].classList.remove('slim1');
                sections[4].classList.remove('slim1');
                break;
            }
            case '2':{
                sections[1].classList.add('slim2');
                sections[3].classList.add('slim2');
                sections[4].classList.add('slim2');
                break;
            }
            case '3':{
                sections[1].classList.remove('slim3');
                sections[2].classList.remove('slim3');
                sections[4].classList.remove('slim3');
                break;
            }
            case '4':{
                sections[1].classList.remove('slim4');
                sections[2].classList.remove('slim4');
                sections[3].classList.remove('slim4');
                break;
            }
        }
    }
    this.classList.add('active');
    console.log(number===1);
    switch (number){
        case '1':{
            sections[2].classList.add('slim1');
            sections[3].classList.add('slim1');
            sections[4].classList.add('slim1');
            break;
        }
        case '2':{
            sections[1].classList.add('slim2');
            sections[3].classList.add('slim2');
            sections[4].classList.add('slim2');
            break;
        }
        case '3':{
            sections[1].classList.add('slim3');
            sections[2].classList.add('slim3');
            sections[4].classList.add('slim3');
            break;
        }
        case '4':{
            sections[1].classList.add('slim4');
            sections[2].classList.add('slim4');
            sections[3].classList.add('slim4');
            break;
        }
    }
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
window.onscroll = function() {closeSection(), showEffects()};






