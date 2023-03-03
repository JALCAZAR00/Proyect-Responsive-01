const menuMobileActivate = document.querySelector('.menu');
const menuMobile = document.querySelector('.menu-mobile');
const menuMobileClose = document.querySelector('.menu-close');

menuMobileActivate.addEventListener('click', toggleMenuMobile);
menuMobileClose.addEventListener('click', removeMenuMobile);

function toggleMenuMobile(){
    menuMobile.classList.toggle('inactive');
}

function removeMenuMobile(){
    menuMobile.classList.add('inactive');
}