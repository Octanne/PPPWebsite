var menuOpen = false;

function openMenu() {
    document.getElementById("menu").style.width = "100%";
    //document.getElementById("menuBtn").innerHTML = "&#x2715;";
    menuOpen = true;
}

function closeMenu() {
    document.getElementById("menu").style.width = "0%";
    //document.getElementById("menuBtn").innerHTML = "&#9776;";
    menuOpen = false;
}

function switchMenu() {
    if(menuOpen == false) {
        openMenu();
    } else {
        closeMenu();
    }
}