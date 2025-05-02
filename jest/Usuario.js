"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(nombre, email, profesion, trayectoria, estaActivo) {
        this.nombre = nombre;
        this.email = email;
        this.profesion = profesion;
        this.trayectoria = trayectoria;
        this.estaActivo = estaActivo;
    }
    getName() {
        return this.nombre;
    }
    getProfile() {
        return `El usuario es ${this.nombre}, se dedica a ${this.profesion} y tiene ${this.trayectoria} años de experiencia.`;
    }
    isStillActive() {
        console.log(this.estaActivo);
        return this.estaActivo;
    }
}
exports.Usuario = Usuario;
