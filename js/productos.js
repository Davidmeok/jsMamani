//* FUNCION CONSUMIR JSON DE PRODUCTOS CON FETCH, ASYNC Y AWAIT
const fetchProductos = async () => {
    try {
        const respuesta = await fetch("./js/productos.json");
        const contenido = await respuesta.json();
        console.log(contenido);
        productos(contenido);
    } catch (error) {
        console.log("no se pudo cargar los productos");
    }
};
