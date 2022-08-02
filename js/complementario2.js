//* DESAFIO COMPLEMENTARIO 2
//? INCORPORAR ARRAYS
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
// RECORRER EL ARRAY DE INICIO A FIN Y OBTENER NOMBRES Y PRECIOS DE LOS PRODUCTOS
let lista = ""
// POR CADA NOMBRE Y PRECIO DEL ARRAY PRODUCTOS
for (const nombreYprecio of productos) {
    // GUARDAR NOMBRE Y PRECIO UN ABAJO DEL OTRO
    lista += `${nombreYprecio.nombre}  $${nombreYprecio.precio} \n`;
}
// MOSTRAR LISTA DE LOS NOMBRES DE LOS PRODUCTOS Y PREGUNTAR QUE DESEA AGREGAR AL CARRITO
let productoSeleccionado = prompt("¿Que desea agregar al carrito?\n" + lista);

// REPETIR PREGUNTA HASTA QUE INGRESE ESC PARA SALIR
while (productoSeleccionado != "ESC") {
    productoSeleccionado = prompt("¿Que desea agregar al carrito?\nPara salir escriba ESC\n" + lista);
    // SI PRODUCTOSELECCIONADO ES DE TIPO NUMBER 
    if (!isNaN(productoSeleccionado)) {
        alert("No ingresaste un producto de la lista");
    } else if (productoSeleccionado == "ESC") { // O SI PRODUCTOSELECCIONADO ES IGUAL A ESC CORTAR CICLO
        break;
    }
    else { // SINO MOSTRAR ALERTA 
        alert("Agregaste un producto al carrito")
    }
}