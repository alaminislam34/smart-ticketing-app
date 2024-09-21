const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const menuItems = document.getElementById('menu-items');

function clickMenu(){
    menuOpen.classList.toggle('hidden');
    menuClose.classList.toggle('hidden');
    menuItems.classList.toggle('hidden');
}


