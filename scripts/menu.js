var menuOpen = false;

function openMenu() {
    document.getElementById("menu").style.width = "100%";
    document.getElementById("menuBtn").innerHTML = "&#x2715;";
	document.getElementById("menuBtn").style.marginRight = "0.08em";
    menuOpen = true;
}

function closeMenu() {
    document.getElementById("menu").style.width = "0%";
    document.getElementById("menuBtn").innerHTML = "&#9776;";
	document.getElementById("menuBtn").style.marginRight = "auto";
    menuOpen = false;
}

function switchMenu() {
    if(menuOpen == false) {
        openMenu();
    } else {
        closeMenu();
    }
}