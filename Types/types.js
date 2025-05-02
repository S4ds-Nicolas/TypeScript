"use strict";
class PersonaClass {
    constructor() {
        this.nombre = "";
        this.edad = 0;
    }
}
// Resultado equivalente a:
// {
//   readonly nombre: string;
//   readonly edad: number;
// }
// let persona: PersonaSoloLectura = {
//     nombre: "Min",
//     edad: 30
// };
console.log(persona.nombre); // Esto sí se compilará a JavaScript
function esNumero(valor) {
    return (typeof valor === "number");
}
const resultado1 = esNumero(42); // true
const resultado2 = esNumero("hello"); // false
console.log(resultado1);
console.log(resultado2);
