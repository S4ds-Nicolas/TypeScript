"use strict";
function identity(arg) {
    return arg;
}
let output1 = identity("cualquier valor");
console.log("output1: " + output1);
let output2 = identity(42);
console.log("output2: " + output2);
class Caja {
    constructor(valor) {
        this.contenido = valor;
    }
    obtenerContenido() {
        return this.contenido;
    }
}
let cajaDeString = new Caja("libros");
console.log("Contenido de la caja de string", cajaDeString.obtenerContenido());
