const btnToggle = document.querySelector('.btn-toggle');
var navbar = document.getElementById('navo');
const closeBtn = document.getElementById('close-contact');

btnToggle.onclick = function(){
    navbar.classList.add('visible')
}


closeBtn.onclick = function(){
    navbar.classList.remove('visible')
}