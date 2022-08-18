//* SEGUNDA ENTREGA DEL PROYECTO FINAL
//? USO DE JSON , STORAGE , DOM Y EVENTOS

//* CREAR INFORMACION DE PRODUCTOS A UTILIZAR
//? LISTA DE PRODUCTOS
const productos = [
    {
        id: 1,
        nombre: "Crisma Basic",
        precio: 350,
        imagen: "img/crismabasic.png",
        descripcion: "contiene 1 Medallon de Carne, Cheddar, Tomate, Lechuga y Remolacha",
        tipo: "Menu",
    },
    {
        id: 2,
        nombre: "Crisma Lite",
        precio: 450,
        imagen: "img/crismalite.png",
        descripcion: "contiene 1 Medallon de Carne, Cheddar, Panceta, Tomate, Lechuga y Condimentos",
        tipo: "Menu",
    },
    {
        id: 3,
        nombre: "Crisma Classic",
        precio: 550,
        imagen: "img/crismaclassic.png",
        descripcion: "contiene 1 Medallon de Carne, Cheddar, Panceta, Papas Fritas Tomate, Lechuga y Condimentos",
        tipo: "Menu",
    },
    {
        id: 4,
        nombre: "Crisma Black",
        precio: 600,
        imagen: "img/crismablack.png",
        descripcion: "contiene1 Medallon de Carne, Cheddar, Panceta y Condimentos",
        tipo: "Menu",
    },
    {
        id: 5,
        nombre: "Crisma Red",
        precio: 750,
        imagen: "img/crismared.png",
        descripcion: "contiene 1 Medallon de Carne, Cheddar, Lechuga y Condimentos",
        tipo: "Menu",
    },
    {
        id: 6,
        nombre: "Crisma Mega",
        precio: 880,
        imagen: "img/crismamega.png",
        descripcion: "contiene 2 Medallon de Carne, Cheddar, Panceta y Condimentos",
        tipo: "Menu",
    },
    {
        id: 7,
        nombre: "Promo Basic",
        precio: 1000,
        imagen: "img/promouno.png",
        descripcion:
            "contiene 2 Crismas, Cheddar, Panceta, Papas Fritas, Bebida, Tomate, Lechuga, Condimentos y Papas Fritas",
        tipo: "Promo",
    },
    {
        id: 8,
        nombre: "Promo x3",
        precio: 1900,
        imagen: "img/promodos.png",
        descripcion: "contiene 3 Crismas Simples, Cheddar, Pancet, Papas Fritas, Tomate y Lechuga",
        tipo: "Promo",
    },
    {
        id: 9,
        nombre: "Promo Vegana",
        precio: 550,
        imagen: "img/promotres.png",
        descripcion: "contiene 1 Crisma Vegana, Tomate, Lechuga, Perejil, Batata Condimentos y Papas Fritas",
        tipo: "Promo",
    },
];

//* CREAR DOM A UTILIZAR
const main = document.getElementById("main"); // NODO CON EL ID MAIN
const tempProducto = document.getElementById("template-producto"); // TEMPLATE A UTILIZAR Y CLONAR
const fragProducto = document.createDocumentFragment(); // FRAGMENTO A ADJUNTAR AL CLON DEL TEMPLATE

//? UTILIZAR PROPIEDADES DE PRODUCTOS PARA APLICAR EN EL DOM
// PARA CADA ELEMENTO DE PRODUCTOS EJECUTAR FUNCION
productos.forEach((elemento) => {
    // CLON DEL TEMPLATE , SU CONTENIDO , DESDE EL PRIMER ELEMENTO
    const clonProducto = tempProducto.content.firstElementChild.cloneNode(true);
    // MODIFICACION DE ELEMENTOS DEL TEMPLATE
    clonProducto.querySelector(".product-img").setAttribute("src", `./${elemento.imagen}`);
    clonProducto.querySelector(".product-tittle").textContent = elemento.nombre;
    clonProducto.querySelector(".product-price").textContent = elemento.precio;
    clonProducto.querySelector(".btn-agregar").dataset.agregar = elemento.nombre;
    clonProducto.querySelector(".btn-agregar").dataset.precio = elemento.precio;
    clonProducto.querySelector(".svg-agregar").dataset.agregar = elemento.nombre;
    clonProducto.querySelector(".svg-agregar").dataset.precio = elemento.precio;
    clonProducto.querySelector(".path-agregar").dataset.agregar = elemento.nombre;
    clonProducto.querySelector(".path-agregar").dataset.precio = elemento.precio;
    // ADJUNTAR TODO EL CONTENIDO DEL CLON AL FRAGMENTO
    fragProducto.appendChild(clonProducto);
});
// ADJUNTO EL FRAGMENTO COMPLETO AL NODO CON EL ID MAIN
main.appendChild(fragProducto);

//* CREAR EVENTOS PARA EL DOM CREADO

//? USO DE DELEGACION DE EVENTOS
document.addEventListener("click", (ev) => {
    // SI, EN DONDE EL EVENTO SE EJECUTO, EL ELEMENT CON LA CLASE ES SELECCIONABLE?
    if (ev.target.matches(".btn-agregar") || ev.target.matches(".svg-agregar") || ev.target.matches(".path-agregar")) {
        // FUNCION AGREGAR PRODUCTO AL CARRITO
        agregarCarrito(ev);
    }
});

//* FUNCION DE AGREGAR AL CARRITO
//? ARRAY DE PRODUCTOS AGREGADOS VACIO O IGUAL A LO ALMACENADO EN LOCAL STORAGE
const carrito = JSON.parse(localStorage.getItem("product-carrito")) || [];
function agregarCarrito(ev) {
    // PRODUCTO AGREGADO AL CARRITO
    const producto = {
        nombre: ev.target.dataset.agregar,
        cantidad: 1,
        precio: parseInt(ev.target.dataset.precio),
    };
    // INDICE PARA SABER SI EXISTE EL ELEMENTO EN EL ARRAY CARRITO
    const indexof = carrito.findIndex((elemento) => producto.nombre === elemento.nombre);
    // SI, EL ELEMENTO NO EXISTE, AGREGAR EL PRODUCTO AL ARRAY CARRITO
    if (indexof === -1) {
        carrito.push(producto);
        // SI EXISTE, SE AUMENTA LA CANTIDAD DEL PRODUCTO SELECCIONADO
    } else {
        carrito[indexof].cantidad++;
    }

    //* FUNCION GUARDAR PRODUCTOS AGREGADOS AL LOCAL STORAGE
    const agregadoLocal = (clave, valor) => {
        localStorage.setItem(clave, valor); // GUARDAR INFORMACION CON LA CLAVE Y VALOR
    };
    // INFORMACION DEL STORAGE DE JSON A OBJETO
    agregadoLocal("product-carrito", JSON.stringify(carrito));
}

//* CREAR DOM CON LA INFORMACION DEL CARRITO DE COMPRAS
//? TRANSFORMAR JSON DE CARRITO Y UTILIZAR SUS VALORES PARA UTILIZAR EN EL HTML
