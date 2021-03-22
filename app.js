const navMenu = document.querySelector('#mobile-menu')
const navMenuLinks = document.querySelector('.nav-menu')

navMenu.addEventListener('click', function () {
    navMenu.classList.toggle('is-active')
    navMenuLinks.classList.toggle('active')

})