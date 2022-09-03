//* FUNCION CARGAR PRODUCTOS
cargarProductos();
//* EVENTO AL CARGAR DOM PARA EL SITIO
document.addEventListener("DOMContentLoaded", () => {
    fetchProductos();
});
//* EVENTOS CLICK PARA EL SITIO
document.addEventListener("click", (ev) => {
    //? EVENTO PARA LOS NODOS BTN, SVG Y PATH DE AGREGAR AL CARRITO
    if (ev.target.matches(".btn-agregar, .btn-agregar svg, .btn-agregar path")) {
        agregarCarrito(ev);
        mostrarNotificacion();
    }
    //? EVENTO PARA EL NODO BTN DE ELIMINAR PRODUCTO DEL CARRITO
    if (ev.target.matches(".aside-delete svg, .aside-delete path")) {
        eliminarProducto(ev);
    }

    if (ev.target.matches(".aside-btn path")) {
        mostrarAside();
    }
});
