// scroll logo
var logo = document.querySelector('.logo');
var navbar = document.querySelector('.navbar');
var up_nav = true;
var ini = false;

function scroll_down() {    
    if(this.scrollY > 30){
        setTimeout(() => {
            desplegable();
            up_nav = false;
        }, 100);
    } else {
        setTimeout(() => {
            desplegable();
            up_nav = true;
        }, 100);
    }
}
window.addEventListener("scroll", scroll_down);



// burger colapse

var burger = document.getElementById("burger");

function uncheck() {
    burger.checked = false;
}

function desplegable() {
    if (burger.checked == true) {
        logo.classList.add("logo_scroll");       //logo se achica
        navbar.classList.add("navbar_scroll");   //fondo gris
      } 
    if ((burger.checked == false) && (up_nav == true)) {
        logo.classList.remove("logo_scroll");       //logo se agranda
        navbar.classList.remove("navbar_scroll");   //fondo transparente
    }
    if((burger.checked == false) && (up_nav == false)){
        logo.classList.add("logo_scroll");       //logo se achica
        navbar.classList.add("navbar_scroll");   //fondo gris
    }
}
burger.addEventListener('change', desplegable);