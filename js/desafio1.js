//* DESAFIO 1 ENTREGABLE
//? SIMULADOR INTERACTIVO
// PRODUCTOS DISPONIBLES
let producto1 = "Crisma Basic";
let precio1 = 350;
let producto2 = "Crisma Lite";
let precio2 = 450;
let producto3 = "Crisma Classic";
let precio3 = 550;
let producto4 = "Crisma Black";
let precio4 = 650;
let producto5 = "Crisma Red";
let precio5 = 750;
let producto6 = "Crisma Mega";
let precio6 = 880;
let producto7 = "Promo Basic";
let precio7 = 1000;
let producto8 = "Promo x3";
let precio8 = 1900;
let producto9 = "Promo Vegana";
let precio9 = 550;
let listaProductos = ""
// FUNCION DE MOSTRAR LISTA DE PRODUCTOS CON SUS PRECIOS
function lista() {
    listaProductos = "1- " + producto1 + "  $" + precio1 + "\n" +
        "2- " + producto2 + "  $" + precio2 + "\n" +
        "3- " + producto3 + "  $" + precio3 + "\n" +
        "4- " + producto4 + "  $" + precio4 + "\n" +
        "5- " + producto5 + "  $" + precio5 + "\n" +
        "6- " + producto6 + "  $" + precio6 + "\n" +
        "7- " + producto7 + "  $" + precio7 + "\n" +
        "8- " + producto8 + "  $" + precio8 + "\n" +
        "9- " + producto9 + "  $" + precio9 + "\n";
    return listaProductos;
}
// FUNCION DE MOSTRAR LISTA DE PRECIO FINAL
function final(productoFinal, precioFinal) {
    alert(
        "TU CARRITO: \n" +
        "-1 " + productoFinal + "\n" +
        "TOTAL:  $" + precioFinal);
}
// MOSTRAR LISTA DE PRODUCTOS Y PRECIOS Y PEDIR AL USUARIO QUE SELECCIONE UN PRODUCTO
let productoSeleccionado = prompt("¿Que desea agregar al carrito?\n" + lista());
while (productoSeleccionado != "ESC") {
    // MOSTRAR CARRITO DE COMPRA DEPENDIENDO QUE NUMERO SELECCIONO Y EL TOTAL
    if (productoSeleccionado == 1) {
        final(producto1, precio1);
        break;
    } else if (productoSeleccionado == 2) {
        final(producto2, precio2);
        break;
    } else if (productoSeleccionado == 3) {
        final(producto3, precio3);
        break;
    } else if (productoSeleccionado == 4) {
        final(producto4, precio4);
        break;
    } else if (productoSeleccionado == 5) {
        final(producto5, precio5);
        break;
    } else if (productoSeleccionado == 6) {
        final(producto6, precio6);
        break;
    } else if (productoSeleccionado == 7) {
        final(producto7, precio7);
        break;
    } else if (productoSeleccionado == 8) {
        final(producto8, precio8);
        break;
    } else if (productoSeleccionado == 9) {
        final(producto9, precio9);
        break;
    } // SINO AVISAR QUE SELECCIONE UN PRODUCTO DE LA LISTA O QUE ESCRIBA ESC PARA SALIR
    else {
        productoSeleccionado = prompt("¿Que desea agregar al carrito?\nEscriba ESC para salir\n" + lista());
    }
}