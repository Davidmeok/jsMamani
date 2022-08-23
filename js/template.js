const main = document.getElementById("main"); // NODO <MAIN ID="MAIN">
const tempProducto = document.getElementById("template-producto"); // NODO <TEMPLATE ID="TEMPLATE-PRODUCTO">
const fragProducto = document.createDocumentFragment(); // FRAGMENT
const carrito = JSON.parse(localStorage.getItem("product-carrito")) || []; // CARRITO DE PRODUCTOS
const aside = document.getElementById("aside-main"); // NODO <MAIN ID="ASIDE-MAIN">
const tempAside = document.getElementById("template-aside"); // NODO <TEMPLATE ID="TEMPLATE-ASIDE">
const fragAside = document.createDocumentFragment(); // FRAGMENT
const asideFooter = document.getElementById("aside-footer"); // NODO <FOOTER ID="ASIDE-FOOTER">
const tempAsideFooter = document.getElementById("template-aside-footer"); // NODO <TEMPLATE ID="TEMPLATE-ASIDE-FOOTER">
const fragAsideFooter = document.createDocumentFragment(); // FRAGMENT
