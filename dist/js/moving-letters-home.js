var title1 = document.getElementById('title1');
var title2 = document.getElementById('title2');
var title3 = document.getElementById('title3');
var title4 = document.getElementById('title4');
var title5 = document.getElementById('title5');

$(document).ready(function () {
    title1.classList.add('ml2');
});

window.onscroll = function() {
    if(checkVisible(title1)){
        if(title1.classList.value !== 'ml2'){
            title1.classList.add('ml2');
        }
    }else{
        title1.classList.remove('ml2');
    }

    if(checkVisible(title2)) {
        if (title2.classList.value !== 'ml2') {
            title2.classList.add('ml2');
        }
    }else{
        title2.classList.remove('ml2');
    }

    if(checkVisible(title3)) {
        if (title3.classList.value !== 'ml2') {
            title3.classList.add('ml2');
        }
    }else{
        title3.classList.remove('ml2');
    }

    if(checkVisible(title4)) {
        if (title4.classList.value !== 'ml2') {
            title4.classList.add('ml2');
        }
    }else{
        title4.classList.remove('ml2');
    }

    if(checkVisible(title5)) {
        if (title5.classList.value !== 'ml2') {
            title5.classList.add('ml2');
        }
    }else{
        title5.classList.remove('ml2');
    }
};

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}







