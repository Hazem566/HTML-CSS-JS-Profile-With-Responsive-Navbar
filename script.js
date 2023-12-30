const closeNav = document.querySelector('.close__icon');
const openNav = document.querySelector('.open__icon');
const navLinks = document.querySelectorAll('.nav__link');
const menuLinks = document.querySelectorAll('.menu__link');
const menu = document.querySelector('.aside');


window.addEventListener('DOMContentLoaded', () => {
    menu.classList.remove('show');
});
openNav.addEventListener('click', () => {
    menu.classList.add('show');
});
closeNav.addEventListener('click', () => {
    menu.classList.remove('show');
});
navLinks.forEach( link => {
    link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});
menuLinks.forEach( link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
    });
});





