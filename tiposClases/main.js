"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const empelado_1 = require("./empelado");
const empleado = new empelado_1.Empleado('Juan', 30, true, 'Desarrollador Frontend');
console.log(empleado.saludar());
console.log(empleado.obtenerInfo());
console.log(empleado.nombre);
