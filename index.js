const barraBusquedaElement = document.getElementById("busqueda-header");
const menuMobileHeader = document.getElementById("menu-header-mobile");
const botonToggleMenuHeader = document.getElementById("toggle-menu-header");


document.getElementById("cerrar-busqueda").addEventListener("click",toggleBarraBusqueda)
document.getElementById("toggle-buscar-mobile").addEventListener("click",toggleBarraBusqueda)
botonToggleMenuHeader.addEventListener("click",toggleMenuMobile)

function toggleBarraBusqueda(){
  barraBusquedaElement.classList.toggle("escondido");
}

function toggleMenuMobile(){
  menuMobileHeader.classList.toggle("escondido");
  botonToggleMenuHeader.src = menuMobileHeader.classList === "escondido" ? "./img/menu-hamburgesa.svg" : "algo"; 
}
