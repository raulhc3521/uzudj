var logo = document.querySelector('.logo');
var navbar = document.querySelector('.navbar');

function scroll_down() {
    if(this.scrollY > 10){
        setTimeout(() => {
            logo.classList.add("logo_scroll");
            navbar.classList.add("navbar_scroll");
        }, 100);
        
    } else {
        setTimeout(() => {
            logo.classList.remove("logo_scroll");
            navbar.classList.remove("navbar_scroll");
        }, 100);
        
    }
}
window.addEventListener("scroll", scroll_down);