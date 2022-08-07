//* PRIMERA PRE ENTREGA DEL PROYECTO FINAL
// ESTRUCTURA DE PRODUCTOS Y PRECIOS
class Productos {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

//* ARRAY DE PRODUCTOS
const productos = [];
//* SE AGREGAN AL ARRAY LOS PRODUCTOS CON SU NOMBRE Y PRECIO
productos.push(new Productos(1, "Crisma Basic", 350));
productos.push(new Productos(2, "Crisma Lite", 450));
productos.push(new Productos(3, "Crisma Classic", 550));
productos.push(new Productos(4, "Crisma Black", 650));
productos.push(new Productos(5, "Crisma Red", 750));
productos.push(new Productos(6, "Crisma Mega", 880));
productos.push(new Productos(1, "Promo Basic", 1000));
productos.push(new Productos(2, "Promo x3", 1900));
productos.push(new Productos(3, "Promo Vegana", 550));
console.log(productos); // VERIFICAR QUE SE AGREGARON LOS OBJETOS AL ARRAY PRODUCTOS

//* FUNCION DE MOSTRAR OPCIONES A ELEGIR
function opciones() {
    const opciones = "1 - Ver Menu\n2 - Ver Promos\n3 - Salir";
    return opciones;
}
console.log(opciones()); // VERIFICAR QUE SE MUESTRAN OPCIONES

//* ARRAY CON LOS PRODUCTOS CRISMA CON FILTER
const menu = productos.filter((elemento) => elemento.nombre.includes("Crisma"));
console.log(menu); // VERIFICAR QUE SE CREO EL NUEVO ARRAY

//* ARRAY CON LOS PRODUCTOS PROMO CON FILTER
const promos = productos.filter((elemento) =>
    elemento.nombre.includes("Promo")
);
console.log(promos); // VERIFICAR QUE SE CREO EL NUEVO ARRAY

//* FUNCION DE MOSTRAR LISTA DE ID, NOMBRE Y PRECIO DE LOS PRODUCTOS CON FOREACH
function mostrarLista(array) {
    let lista = "";
    array.forEach((elemento) => {
        // POR CADA ELEMENTO DEL ARRAY INGRESADO POR PARAMETRO
        lista += `${elemento.id} - ${elemento.nombre} $${elemento.precio} \n`;
    });
    return lista; // RETORNO DE VARIABLE LISTA PARA UTILIZARLA GLOBALMENTE
}

//* VARIABLES GLOBALES A UTILIZAR
let verdadero = true;
let preguntar = 0;
let opcionElegida = 0;

//* VALIDACION DE INGRESO DE OPCION
while (verdadero) {
    opcionElegida = parseInt(prompt("¿Que desea hacer?\n" + opciones()));
    mostrar();
}

//* FUNCION DE MOSTRAR LISTA SEGUN LA OPCION INGRESADA
function mostrar() {
    if (opcionElegida === 1) {
        // SI ES IGUAL A 1, PREGUNTAR QUE DESEA COMPRAR Y MOSTRAR LISTA DE MENU
        preguntar = parseInt(
            prompt("¿Que desea comprar?\n" + mostrarLista(menu))
        );
        gracias(1, 6);
    } else if (opcionElegida === 2) {
        // SI ES IGUAL A 1, PREGUNTAR QUE DESEA COMPRAR Y MOSTRAR LISTA DE PROMOS
        preguntar = parseInt(
            prompt("¿Que desea comprar?\n" + mostrarLista(promos))
        );
        gracias(1, 3);
    } else if (opcionElegida === 3) {
        // SI ES 3, MOSTRAR POR CONSOLA QUE NO QUISO COMPRAR Y SALIR
        console.log("No quiso comprar");
        verdadero = false;
    } else {
        console.log("No seleccionaste ninguna opcion");
    }
}

//* FUNCION MENSAJE DE COMPRA EXITOSA O MENSAJE DE ERROR
function gracias(desde, hasta) {
    if (preguntar >= desde && preguntar <= hasta) {
        alert("Gracias por la compra");
    } else {
        alert("No seleccionaste ninguna opcion");
    }
}
