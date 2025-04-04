import { Persona } from "./clases";

export class Empleado extends Persona{
    constructor(
        nombre: string,
        edad: number,
        esDesarrollador: boolean,
        public puesto: string
    ) {
        super(nombre, edad, esDesarrollador);
    }
    
    saludar() {
        return `Hola, trabajo como ${this.puesto}`;
    }
    
    obtenerInfo() {
        return `Tengo ${this.edad} años y trabajo como ${this.puesto}`;
    }
}