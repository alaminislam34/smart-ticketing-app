const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const menuItems = document.getElementById('menu-items');

function clickMenu(){
    menuOpen.classList.toggle('hidden');
    menuClose.classList.toggle('hidden');
    menuItems.classList.toggle('hidden');
}
// document.getElementById('menu-open').addEventListener('click', function(){
//     document.getElementById('menu-open').classList.add('hidden');
//     document.getElementById('menu-items').classList.remove('hidden');
//     document.getElementById('menu-close').classList.remove('hidden');
    
// })
// document.getElementById('menu-close').addEventListener('click', function(){
//     document.getElementById('menu-close').classList.add('hidden');
//     document.getElementById('menu-items').classList.add('hidden');
//     document.getElementById('menu-open').classList.remove('hidden');
// })

