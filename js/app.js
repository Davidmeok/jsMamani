//* DESAFIO COMPLEMENTARIO 1
//? CREA UN ALGORITMO UTILIZANDO UN CICLO
// PEDIR AL USUARIO INGRESAR 3 LENGUAJES DE PROGRAMACION
let cantidad = parseInt(prompt(`Ingresar cantidad de lenguajes que conozcas`));
let lenguajes = "";
// SI EL USUARIO INGRESA TEXTO O NO INGRESA NADA, REPETIR INGRESAR CANTIDAD
while (isNaN(cantidad) && cantidad != "") {
    cantidad = parseInt(prompt(`Ingresa numeros, por favor`));
    console.log(`No ingreso numeros`);
} // SI EL USUARIO INGRESA NUMEROS MENOR A 3, PREGUNTAR QUE LENGUAJES SON
if (cantidad > 0 && cantidad <= 3) {
    // PREGUNTAR DEPENDIENDO LA CANTIDAD INGRESADA
    for (let index = 0; index < cantidad; index++) {
        lenguajes = prompt("Nombra los lenguajes que conozcas") + "\n";
        console.log(lenguajes);
    }
}// SI EL USUARIO INGRESA UNA CANTIDAD MAYOR A 3, DAR FELICITACIONES 
else {
    alert(`Conoces muchos lenguajes, felicitaciones`);
    console.log("Conoce " + cantidad + " lenguajes");
}
