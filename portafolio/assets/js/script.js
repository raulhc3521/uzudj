//Función de rotación
var avatar = document.querySelector('.descripcion__avatar');
var scrollup = document.querySelector('.scroll');
var navbar = document.querySelector('.navbar');

function rotate() {

    if(this.scrollY > 10){
        setTimeout(() => {
            avatar.classList.add("rotate_avatar");
            scrollup.classList.add("rotate_scrollup");
            navbar.classList.add("nav_scroll");
        }, 100);
        
    } else {
        setTimeout(() => {
            avatar.classList.remove("rotate_avatar");
            scrollup.classList.remove("rotate_scrollup");
            navbar.classList.remove("nav_scroll");
        }, 100);
        
    }
}
window.addEventListener("scroll", rotate);


//Función uncheck
function uncheck() {
    document.getElementById("nav__desplegable").checked = false;
}


//Función modal imagenes
var modal1 = document.querySelector('.modal-1');
var modal2 = document.querySelector('.modal-2');
var modal3 = document.querySelector('.modal-3');
var modal4 = document.querySelector('.modal-4');
var body = document.querySelector('body');
var modalo1 = document.querySelector('.modal--overflow1');
var modalo2 = document.querySelector('.modal--overflow2');
var modalo3 = document.querySelector('.modal--overflow3');
var modalo4 = document.querySelector('.modal--overflow4');
var boxModal = document.getElementById("box-modal");
var pro_des = document.querySelector('.prototype-desktop');
var pro_mob = document.querySelector('.prototype-mobile');
var proto_d = document.querySelector('.proto-d');
var proto_m = document.querySelector('.proto-m');
var o_proto = document.querySelector('.open_proto');
var c_proto = document.querySelector('.close_proto');


function proto() {
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        pro_mob.style.display = "block";
        proto_m.style.cssText = "opacity: 1; visibility: visible; display: flex;";

        proto_d.style.cssText = "opacity: 0; visibility: hidden; display: none;";
    }
    else {
        pro_des.style.display = "block";
        proto_d.style.cssText = "opacity: 1; visibility: visible; display: flex;";

        proto_m.style.cssText = "opacity: 0; visibility: hidden; display: none;";
    }
}

function imgModal(element) {
    document.getElementById("img-modal").src = element.src;
    boxModal.style.cssText = "opacity: 0; visibility: visible;";
    body.style.overflow = "hidden";
    
    setTimeout(() => {
        boxModal.style.cssText = "opacity: 1; visibility: visible;";
    }, 20);

    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        modal.style.margin = "10px";
        body.style.margin = "0";
        pro_mob.style.display = "block";
    }
    else {
        modal.style.margin = "10px 10px 10px 4px";
        body.style.margin = "0 6px 0 0";
        pro_des.style.display = "block";
    }
}

function close_img_modal() {
    boxModal.style.opacity = 1;
    setTimeout(() => {
        boxModal.style.cssText = "opacity: 0; visibility: hidden;";
    }, 20);
}

//Funciones Modales
function open_modal1() {
    body.style.overflow = "hidden";
    modal1.style.cssText = "opacity: 0; visibility: visible;";
    setTimeout(() => {
        modal1.style.opacity = 1;
    }, 20);

    if (! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        modalo1.style.margin = "10px 10px 10px 4px";
        body.style.margin = "0 6px 0 0"; 
    }
    proto();    
}

function open_modal2() {
    body.style.overflow = "hidden";
    modal2.style.cssText = "opacity: 0; visibility: visible;";
    setTimeout(() => {
        modal2.style.opacity = 1;
    }, 20);

    if (! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        modalo2.style.margin = "10px 10px 10px 4px";
        body.style.margin = "0 6px 0 0"; 
    }
    proto();  
}
function open_modal3() {
    body.style.overflow = "hidden";
    modal3.style.cssText = "opacity: 0; visibility: visible;";
    setTimeout(() => {
        modal3.style.opacity = 1;
    }, 20);

    if (! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        modalo3.style.margin = "10px 10px 10px 4px";
        body.style.margin = "0 6px 0 0"; 
    }
    proto();  
}
function open_modal4() {
    body.style.overflow = "hidden";
    modal4.style.cssText = "opacity: 0; visibility: visible;";
    setTimeout(() => {
        modal4.style.opacity = 1;
    }, 20);

    if (! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        modalo4.style.margin = "10px 10px 10px 4px";
        body.style.margin = "0 6px 0 0"; 
    }
    proto();  
}

function close_modal() {
    body.style.overflow = "auto"; 
    if (screen.width > 1200) {
        modalo1.style.margin = "10px 10px 10px 10px";
        modalo2.style.margin = "10px 10px 10px 10px";
        modalo3.style.margin = "10px 10px 10px 10px";
        modalo4.style.margin = "10px 10px 10px 10px";
        body.style.margin = "0 0 0 0"; 
    }
    modal1.style.opacity = 1;
    modal2.style.opacity = 1;
    modal3.style.opacity = 1;
    modal4.style.opacity = 1;
    setTimeout(() => {
        modal1.style.cssText = "opacity: 0; visibility: hidden;";
        modal2.style.cssText = "opacity: 0; visibility: hidden;";
        modal3.style.cssText = "opacity: 0; visibility: hidden;";
        modal4.style.cssText = "opacity: 0; visibility: hidden;";
    }, 20);
}