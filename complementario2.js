//* DESAFIO 1 ENTREGABLE
//? SIMULADOR INTERACTIVO
// ESTRUCTURA DE PRODUCTOS Y PRECIOS
class Productos {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

}

// ARRAY DE PRODUCTOS
const productos = [];
// SE AGREGAN AL ARRAY LOS PRODUCTOS CON SU NOMBRE Y PRECIO
productos.push(new Productos("Crisma Basic", 350));
productos.push(new Productos("Crisma Lite", 450));
productos.push(new Productos("Crisma Classic", 550));
productos.push(new Productos("Crisma Black", 650));
productos.push(new Productos("Crisma Red", 750));
productos.push(new Productos("Crisma Mega", 880));
productos.push(new Productos("Promo Basic", 1000));
productos.push(new Productos("Promo x3", 1900));
productos.push(new Productos("Promo Vegana", 550));
// VERIFICAR QUE SE AGREGARON LOS OBJETOS AL ARRAY PRODUCTOS
console.log(productos);
// RECORRER EL ARRAY DE INICIO A FIN Y OBTENER SOLAMENTE LOS NOMBRES
let nombres = ""
// POR CADA NOMBRE DEL ARRAY PRODUCTOS
for (const nombre of productos) {
    // GUARDAR CADA NOMBRE UNO ABAJO DEL OTRO EN LA VARIABLE NOMBRES
    nombres += nombre.nombre + "\n";
}
// MOSTRAR LISTA DE LOS NOMBRES DE LOS PRODUCTOS Y PREGUNTAR QUE DESEA AGREGAR AL CARRITO
let productoSeleccionado = prompt("¿Que desea agregar al carrito?\n" + nombres);

while (productoSeleccionado != "ESC") {
    productoSeleccionado = prompt("¿Que desea agregar al carrito?\nPara salir escriba ESC\n" + nombres);
    if (!isNaN(productoSeleccionado)) {
        alert("No ingresaste un producto de la lista");
    } else if (productoSeleccionado == "ESC") {
        break;
    }
    else {
        alert("Agregaste un producto al carrito")
    }
}