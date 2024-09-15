const menuBtn = document.querySelector('.burger-menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close');
function Onclick(event)
{
    menuList.classList.toggle('menu__list--open')
    menuShadow.classList.toggle('menu--open')
}

menuBtn.addEventListener('click', Onclick)
    // menuList.classList.add('menu__list--open');


menuClose.addEventListener('click', () =>{
    menuList.classList.remove('menu__list--open');
    menuShadow.classList.remove('menu--open')
});