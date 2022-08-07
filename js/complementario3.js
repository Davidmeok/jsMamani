//* DESAFIO COMPLEMENTARIO 3
//? INTERACTUAR CON HTML ( DOM )
// OBTENGO LOS NODOS CON LA CLASE SECTION-ART
let sArt = document.querySelectorAll(".section-art");
let i = 0; // INCREMENTO A USAR PARA LOS NODELIST
// PARA CADA ELEMENTO ELEMENTO DEL ARRAY PRODUCTOS
productos.forEach((elementos) => {
    // CREAR Y AGREGAR A LAS CLASES SECTION-ART
    sArt[i++].innerHTML = `<img src="./img/crismalite.png" alt="">
                    <h2 class="section-tittle">${elementos.nombre} <span>$${elementos.precio}</span></h2>
                    <div class="con-btn">
                        <button class="btn btn-info">Comprar</button>
                        <button class="btn btn-info">Agregar al carrito</button>
                    </div>`;
});
