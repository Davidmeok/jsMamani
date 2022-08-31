//* NODO, TEMPLATE Y FRAGMENT A UTILIZAR PARA PRODUCTOS
const main = document.getElementById("main");
const tempProducto = document.getElementById("template-producto");
const fragProducto = document.createDocumentFragment();
//* CARRITO DE PRODUCTOS
const carrito = JSON.parse(localStorage.getItem("product-carrito")) || [];
//* NODO, TEMPLATE Y FRAGMENT A UTILIZAR PARA CARRITO
const aside = document.getElementById("aside-main");
const tempAside = document.getElementById("template-aside");
const fragAside = document.createDocumentFragment();
//* NODO, TEMPLATE Y FRAGMENT A UTILIZAR PARA TOTAL Y FINALIZAR COMPRA DEL CARRITO
const asideFooter = document.getElementById("aside-footer");
const tempAsideFooter = document.getElementById("template-aside-footer");
const fragAsideFooter = document.createDocumentFragment();
