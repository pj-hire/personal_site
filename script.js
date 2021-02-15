let hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
let mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
let header = document.querySelector('.header.container');

hamburger.addEventListener('click',() => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
})
