//* DESAFIO ENTREGABLE 2
//? INCORPORAR EVENTOS
const container = document.querySelector(".cant-btn");
const cantidad = document.getElementById("cantidad");
let conta = 0; // VARIABLE DE CANTIDAD PARA UTILIZAR
// AGREGAR DETECTOR DEL EVENTO CLICK Y EJECUTAR FUNCION
container.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-outline-success")) {
        // CONTA VA A INCREMENTARSE
        conta++;
        // CANTIDAD VA A CONTENER EL VALOR DE LA VARIABLE CONTA
        cantidad.textContent = conta;
    } // O SI EL NODO DONDE SE EJECUTO EL EVENTO CONTIENE LA CLASE BTN-DANGER EJECUTAR
    else if (e.target.classList.contains("btn-outline-danger")) {
        // CONTA VA A DECREMENTARSE
        conta--;
        // CANTIDAD VA A CONTENER EL VALOR DE LA VARIABLE CONTA
        cantidad.textContent = conta;
    }
    e.stopPropagation(); // FRENAMOS QUE SE EJECUTEN EVENTOS DE LOS NODOS PADRES
});
