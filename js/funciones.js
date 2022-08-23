//* FUNCION CREAR PRODUCTOS CON DOM
productos.forEach((elemento) => {
    const clonProducto = tempProducto.content.firstElementChild.cloneNode(true);
    clonProducto.querySelector(".product-img").setAttribute("src", `./${elemento.imagen}`);
    clonProducto.querySelector(".product-tittle").textContent = elemento.nombre;
    clonProducto.querySelector(".product-price").textContent = elemento.precio;
    clonProducto.querySelector(".btn-agregar").dataset.agregar = elemento.nombre;
    clonProducto.querySelector(".btn-agregar").dataset.precio = elemento.precio;
    clonProducto.querySelector(".btn-agregar").dataset.imagen = elemento.imagen;
    clonProducto.querySelector(".svg-agregar").dataset.agregar = elemento.nombre;
    clonProducto.querySelector(".svg-agregar").dataset.precio = elemento.precio;
    clonProducto.querySelector(".svg-agregar").dataset.imagen = elemento.imagen;
    clonProducto.querySelector(".path-agregar").dataset.agregar = elemento.nombre;
    clonProducto.querySelector(".path-agregar").dataset.precio = elemento.precio;
    clonProducto.querySelector(".path-agregar").dataset.imagen = elemento.imagen;
    fragProducto.appendChild(clonProducto);
});
main.appendChild(fragProducto);

//* FUNCION GUARDAR INFORMACION AL LOCAL STORAGE
const agregadoLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
};

//* FUNCION AGREGAR AL CARRITO
function agregarCarrito(ev) {
    //? CREACION DE PRODUCTO A AGREGAR AL CARRITO
    const producto = {
        nombre: ev.target.dataset.agregar,
        cantidad: 1,
        precio: parseInt(ev.target.dataset.precio),
        imagen: ev.target.dataset.imagen,
    };
    //? FUNCION PARA SABER EXISTENCIA O INDICE DE UN PRODUCTO EN EL CARRITO
    const indexof = carrito.findIndex((elemento) => producto.nombre === elemento.nombre);
    indexof === -1 ? carrito.push(producto) : carrito[indexof].cantidad++;
    //? FUNCIONES A EJECUTAR
    agregadoLocal("product-carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

//* FUNCION MOSTRAR CARRITO CON DOM
function mostrarCarrito() {
    //? FUNCION CREAR PRODUCTOS CON DOM
    carrito.forEach((elemento) => {
        aside.textContent = "";
        const clonAside = tempAside.content.firstElementChild.cloneNode(true);
        clonAside.querySelector(".aside-img").setAttribute("src", elemento.imagen);
        clonAside.querySelector(".aside-tittle").textContent = `x${elemento.cantidad} ${elemento.nombre}`;
        clonAside.querySelector(".aside-span").textContent = `$${elemento.precio * elemento.cantidad}`;
        fragAside.appendChild(clonAside);
    });
    aside.appendChild(fragAside);
    //? FUNCION A EJECUTAR
    mostrarTotal();
}

//* FUNCION MOSTRAR TOTAL DEL CARRITO
function mostrarTotal() {
    const totalCarrito = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.cantidad, 0);
    asideFooter.textContent = "";
    const clonTotalCarrito = tempAsideFooter.content.cloneNode(true);
    clonTotalCarrito.querySelector(".aside-span").textContent = `$${totalCarrito}`;
    clonTotalCarrito.querySelector(".aside-btn").textContent = "Finalizar Compra";
    fragAsideFooter.appendChild(clonTotalCarrito);
    asideFooter.appendChild(fragAsideFooter);
}
