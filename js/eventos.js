//* FUNCION CARGAR PRODUCTOS
cargarProductos();
//* EVENTO AL CARGAR DOM PARA EL SITIO
document.addEventListener("DOMContentLoaded", () => {
    fetchProductos();
});
//* EVENTOS CLICK PARA EL SITIO
document.addEventListener("click", (ev) => {
    //? EVENTO PARA LOS NODOS BTN, SVG Y PATH DE AGREGAR AL CARRITO
    if (
        ev.target.matches(".btn-agregar") ||
        ev.target.matches(".btn-agregar svg") ||
        ev.target.matches(".btn-agregar path")
    ) {
        agregarCarrito(ev);
        mostrarNotificacion();
    }
});
