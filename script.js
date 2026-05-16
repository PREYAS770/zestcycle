// Hamburger menu toggle
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});