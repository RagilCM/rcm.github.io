const menuToggle = document.querySelector('.hamburger');
const nav = document.querySelector('.menu ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});