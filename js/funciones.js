//* FUNCION CREAR ATRIBUTO DATA EN BOTONES DE COMPRAR Y AGREGAR
function botonesData(clon, selector, indice, elemento) {
    clon.querySelectorAll(selector)[indice].dataset.agregar = elemento.nombre;
    clon.querySelectorAll(selector)[indice].dataset.precio = elemento.precio;
    clon.querySelectorAll(selector)[indice].dataset.imagen = elemento.imagen;
}
//* FUNCION CREAR DOM CON EL CONTENIDO CONSUMIDO DEL JSON
function productos(contenido) {
    contenido.forEach((elemento) => {
        const clonProduct = tempProduct.content.cloneNode(true);
        clonProduct.querySelector(".product-img").setAttribute("src", `./${elemento.imagen}`);
        clonProduct.querySelector(
            ".product-name"
        ).innerHTML = `${elemento.nombre} <span class="product-price">${elemento.precio}</span>`;
        botonesData(clonProduct, ".product-btn", 1, elemento);
        botonesData(clonProduct, ".product-btn svg", 1, elemento);
        botonesData(clonProduct, ".product-btn path", 1, elemento);
        fragProduct.appendChild(clonProduct);
    });
    sectionProduct.appendChild(fragProduct);
}
//* FUNCION GUARDAR INFORMACION AL LOCAL STORAGE
const agregadoLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
};

//* FUNCION CARGAR PRODUCTOS SI EXISTEN
function cargarProductos() {
    carrito.length > 0 && mostrarCarrito();
}

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
    mostrarCarrito();
    agregadoLocal("product-carrito", JSON.stringify(carrito));
}

//* FUNCION MOSTRAR CARRITO CON DOM
function mostrarCarrito() {
    //? FUNCION CREAR PRODUCTOS CON DOM
    carrito.forEach((elemento) => {
        asideProduct.textContent = "";
        const clonAside = tempAside.content.cloneNode(true);
        clonAside.querySelector(".aside-img").setAttribute("src", `./${elemento.imagen}`);
        clonAside.querySelector(".aside-name").textContent = `x${elemento.cantidad} ${elemento.nombre}`;
        clonAside.querySelector(".aside-price").textContent = `$${elemento.precio * elemento.cantidad}`;
        clonAside.querySelector(".aside-delete svg").dataset.producto = elemento.nombre;
        clonAside.querySelector(".aside-delete path").dataset.producto = elemento.nombre;
        fragAside.appendChild(clonAside);
    });
    asideProduct.appendChild(fragAside);
    //? FUNCION A EJECUTAR
    mostrarTotal();
}

//* FUNCION MOSTRAR TOTAL DEL CARRITO
function mostrarTotal() {
    asideTotal.textContent = "";
    const carritoTotal = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.cantidad, 0);
    const clonCarritoTotal = tempAsideTotal.content.cloneNode(true);
    clonCarritoTotal.querySelector(".aside-price").textContent = `$${carritoTotal}`;
    fragAsideTotal.appendChild(clonCarritoTotal);
    asideTotal.appendChild(fragAsideTotal);
}

//* FUNCION MOSTRAR NOTIFICACION DE AGREGADO AL CARRITO
function mostrarNotificacion() {
    Toastify({
        text: "SE AGREGO AL CARRITO",
        duration: 3000,
        position: "right",
        style: {
            background: "#181818",
            color: "#e6e6e6",
            fontSize: "1rem",
            fontWeight: "600",
        },
    }).showToast();
}

//* FUNCION ELIMINAR PRODUCTO DEL CARRITO
function eliminarProducto(ev) {
    carrito = carrito.filter((elemento) => elemento.nombre != ev.target.dataset.producto && carrito);
    agregadoLocal("product-carrito", JSON.stringify(carrito));
    carrito.length == 0 && (asideTotal.textContent = "") & (asideProduct.textContent = "");
    cargarProductos();
}
