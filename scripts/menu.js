var menuOpen = false;

function openMenu() {
    document.getElementById("menu").style.width = "100%";
    menuOpen = true;
}

function closeMenu() {
    document.getElementById("menu").style.width = "0%";
    menuOpen = false;
}

function switchMenu() {
    if(menuOpen == false) {
        openMenu();
    } else {
        closeMenu();
    }
}