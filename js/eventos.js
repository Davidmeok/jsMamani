//* EVENTOS PARA EL SITIO
document.addEventListener("click", (ev) => {
    //? EVENTO PARA LOS NODOS BTN, SVG Y PATH
    (ev.target.matches(".btn-agregar") || ev.target.matches(".svg-agregar") || ev.target.matches(".path-agregar")) &&
        agregarCarrito(ev); //? FUNCION A EJECUTAR
});
