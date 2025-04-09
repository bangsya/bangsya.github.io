// fixed navigasi
window.onscroll = function(){
    const header = document.querySelector('header');
    const buttonToTop = document.getElementById('button-to-top');
    const valueScroll = header.offsetTop;

    if (window.pageYOffset > valueScroll){
        header.classList.add('fixed-nav');
        buttonToTop.classList.remove('scale-0');
        buttonToTop.classList.add('scale-100');
    }else{
        header.classList.remove('fixed-nav');
        buttonToTop.classList.remove('scale-100');
        buttonToTop.classList.add('scale-0');

    }
};

const hamburger = document.querySelector('#hamburger');
const navigasi = document.querySelector('nav');


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navigasi.classList.toggle('scale-100');
});

// Di Klik apa aja pada navigasi langsung close
window.addEventListener('click', function(e){
    if (e.target != hamburger && e.target != navigasi){
        hamburger.classList.remove('hamburger-active');
        navigasi.classList.remove('scale-100');
    }
});