const el = document.getElementsByClassName('line')[0];
let ypos, bottom, result;

const paralax = () => {
    ypos = window.pageYOffset;
    bottom = el.style.bottom;
    result = Math.pow(ypos, 1) - 200;

    if(result >= 0) return;
    el.style.bottom = result + 'px';
};

window.addEventListener('scroll', paralax);