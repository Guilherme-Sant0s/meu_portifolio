let btn_abrir = document.getElementById('btnabrir');
let menu = document.getElementById('menu_mobile');
let over = document.getElementById('overlay_menu')

btn_abrir.addEventListener('click', () =>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu')
})

over.addEventListener('click', () =>{
    menu.classList.remove('abrir-menu')
})