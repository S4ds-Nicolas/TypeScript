"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, edad, desarrollador) {
        this.nombre = nombre;
        this.edad = edad;
        this.desarrollador = desarrollador;
    }
    saludar() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`;
    }
}
exports.Persona = Persona;
