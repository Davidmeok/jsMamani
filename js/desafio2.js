//* DESAFIO ENTREGABLE 2
//? INCORPORAR EVENTOS

//* ESTRUCTURA DE PRODUCTOS Y PRECIOS
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

//* PRODUCTOS CREADOS CON DOM
// OBTENGO EL NODO CON EL ID MAIN
const main = document.getElementById("main");
// OBTENGO EL TEMPLATE QUE TIENE EL ID T-SECTION
const tSection = document.querySelector("#t-section");
// CREO UN FRAGMENTO PARA ADJUNTAR EL TEMPLATE Y AGREGARLO A MAIN
const tsFrag = document.createDocumentFragment();

//* PARA CADA ELEMENTO DEL ARRAY PRODUCTOS EJECUTAR LA FUNCION
productos.forEach((elemento) => {
    // CLONO EL TEMPLATE Y SU CONTENIDO PARA USARLO COMO FRAGMENTO
    const cSection = tSection.content.firstElementChild.cloneNode(true);
    // LE CAMBIO EL TEXTO AL NODO CON LA CLASE TITTLE
    cSection.querySelector(".tittle").textContent = elemento.nombre;
    // LE CAMBIO EL TEXTO AL NODO CON LA CLASE SPAN
    cSection.querySelector(".span").textContent = elemento.precio;
    // VARIABLE CONTADOR PARA UTILIZAR EN EL EVENTO DE LA CLASE CANT-BTN
    let contador = 0;
    // AGREGO DETECTO DEL EVENTO CLICK A LA CLASE CANT-BTN
    cSection.querySelector(".cant-btn").addEventListener("click", (e) => {
        // SI EL NODO DONDE SE EJECUTO EL EVENTO CONTIENE LA CLASE BTN-OUTLINE-SUCCESS EJECUTAR
        if (e.target.classList.contains("btn-outline-success")) {
            // EL CONTADOR VA A INCREMENTARSE
            contador++;
            // EL NODO CON LA CLASE CANTIDAD VA A CONTENER EL VALOR DE CONTADOR
            cSection.querySelector(".cantidad").textContent = contador;
        } // O SI EL NODO DONDE SE EJECUTO EL EVENTO CONTIENE LA CLASE BTN-OUTLINE-DANGER EJECUTAR
        else if (e.target.classList.contains("btn-outline-danger")) {
            // EL CONTADOR VA A DECREMENTARSE
            contador--;
            // EL NODO CON LA CLASE CANTIDAD VA A CONTENER EL VALOR DE CONTADOR
            cSection.querySelector(".cantidad").textContent = contador;
        }
        // FRENAMOS QUE SE EJECUTEN EVENTOS DE LOS NODOS PADRES
        e.stopPropagation();
    });
    // ADJUNTO EL CLON COMPLETO AL FRAGMENTO TSFRAG
    tsFrag.appendChild(cSection);
});
// ADJUNTO EL FRAGMENTO COMPLETO AL NODO CON EL ID MAIN
main.appendChild(tsFrag);
