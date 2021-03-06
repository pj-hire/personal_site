let hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
let mobileMenu = document.querySelector('.header .nav-bar .nav-list ul');
const menuItem = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
let header = document.querySelector('.header.container');

hamburger.addEventListener('click',() => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
})

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
    header.style.borderBottom ="solid 1px var(--clr-accent)"
	} else {
		header.style.backgroundColor = 'rgba(31,30,30,0.24)';
    header.style.borderBottom ="none"
	}
});

menuItem.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobileMenu.classList.toggle('active');
	});
});


// window.addEventListener("DOMContentLoaded", function() {
//   let form = document.getElementById('my-form');
//   let formName = document.getElementById('form-name');
//   let formEmail = document.getElementById('form-email');
//   let formMessage = document.getElementById('form-message');
//   let formBtn = document.getElementById('form-btn');
//
//   function success() {
//       formName.value = '';
//       formEmail.value = '';
//       formMessage.value = '';
//     }
// });
