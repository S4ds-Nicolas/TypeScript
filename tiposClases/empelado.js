"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
const clases_1 = require("./clases");
class Empleado extends clases_1.Persona {
    constructor(nombre, edad, esDesarrollador, puesto) {
        super(nombre, edad, esDesarrollador);
        this.puesto = puesto;
    }
    saludar() {
        return `Hola, trabajo como ${this.puesto}`;
    }
    obtenerInfo() {
        return `Tengo ${this.edad} años y trabajo como ${this.puesto}`;
    }
}
exports.Empleado = Empleado;
