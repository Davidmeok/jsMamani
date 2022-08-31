//* FUNCION CARGAR PRODUCTOS
cargarProductos();
//* EVENTO AL CARGAR DOM PARA EL SITIO
document.addEventListener("DOMContentLoaded", () => {
    fetchProductos();
});
//* EVENTOS CLICK PARA EL SITIO
document.addEventListener("click", (ev) => {
    //? EVENTO PARA LOS NODOS BTN, SVG Y PATH
    if (ev.target.matches(".btn-agregar") || ev.target.matches(".svg-agregar") || ev.target.matches(".path-agregar")) {
        agregarCarrito(ev);
        mostrarNotificacion();
    }
});
