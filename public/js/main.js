var sideBarEl = document.querySelector('.side-bar');
var menuOpen = false;
var menu = document.querySelector('.menu-mobile');
var btnCreated = false;
function modifyWidth () {
    if(window.innerWidth <= 855 && btnCreated == false) {
        btnCreated = true;
        sideBarEl.innerHTML += `<button class="btn btn-secundary menu-open-btn" onclick="doMenu()">Menu</button>`;
    }
    else {
        document.querySelector('.menu-open-btn').remove();
    }
}
/**caso seja um telemóvel a entrar no site */
modifyWidth();
/**
 * FUNCÇÃO RESPONSÁVEL POR decidir se vai abrir o menu o fechar ele
 */
function doMenu () {
    if(!menuOpen) {
        openMenu();
    }
    else {
        closeMenu();
    }
}
/**
 * quando ele abrir o menu deve impossíbitar rodar o scrool
 */
function openMenu() {
    menu.classList.remove('not-show');  
    menuOpen = !menuOpen; 
}

function closeMenu() {
    menu.classList.add('not-show');
    menuOpen = !menuOpen;
}