const menuToggle = document.querySelector('.hamburger');
const nav = document.querySelector('.menu ul');
const Pages = document.getElementById('pages');
const dropdownPages = document.querySelector('.dropdown')

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});

pages.addEventListener('click', function(){
    dropdownPages.classList.toogle('slide');
});