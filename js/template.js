//* NODO, TEMPLATE Y FRAGMENT A UTILIZAR PARA PRODUCTOS
const sectionProduct = document.querySelector(".product-section");
const tempProduct = document.getElementById("template-product");
const fragProduct = document.createDocumentFragment();
//* CARRITO DE PRODUCTOS
let carrito = JSON.parse(localStorage.getItem("product-carrito")) || [];
//* NODO DEL CARRITO
const aside = document.querySelector(".aside");
//* NODO, TEMPLATE Y FRAGMENT A UTILIZAR PARA CARRITO
let asideProduct = document.querySelector(".aside-section");
const tempAside = document.getElementById("template-aside-product");
const fragAside = document.createDocumentFragment();
//* NODO, TEMPLATE Y FRAGMENT A UTILIZAR PARA TOTAL DEL CARRITO
let asideTotal = document.querySelector(".aside-total");
const tempAsideTotal = document.getElementById("template-aside-total");
const fragAsideTotal = document.createDocumentFragment();
