
let lastScrollY = window.scrollY;
const navbar = document.querySelector('nav'); 

window.addEventListener('scroll', () => {
  // Only activate the hide effect if the user has scrolled past the navbar's height
  if (window.scrollY > 80) { 
    if (window.scrollY > lastScrollY) {
      navbar.classList.add('nav-hidden');    // Scrolling DOWN -> Hide
    } else {
      navbar.classList.remove('nav-hidden'); // Scrolling UP -> Show
    }
  } else {
    navbar.classList.remove('nav-hidden');   // Always show at the very top of the page
  }
  lastScrollY = window.scrollY;
});

