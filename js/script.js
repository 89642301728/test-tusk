let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.border-right').addEventListener('click', function(){
    offset = offset + 300;
    if (offset > 900) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.border-left').addEventListener('click', function(){
    offset = offset - 300;
    if (offset < 0) {
        offset = 900;
    }
    sliderLine.style.left = -offset + 'px';
});

