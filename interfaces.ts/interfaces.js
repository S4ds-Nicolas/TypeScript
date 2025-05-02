"use strict";
let persona = {
    nombre: "Juan",
    edad: 30,
    esDesarrollador: true,
    describir: function () {
        throw new Error("Function not implemented.");
    },
    esMayor: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(persona);
let Personas = [
    {
        nombre: "Juan",
        edad: 30,
        esDesarrollador: true,
        describir: function () {
            throw new Error("Function not implemented.");
        },
        esMayor: function () {
            throw new Error("Function not implemented.");
        }
    },
    {
        nombre: "María",
        edad: 25,
        esDesarrollador: false,
        describir: function () {
            throw new Error("Function not implemented.");
        },
        esMayor: function () {
            throw new Error("Function not implemented.");
        }
    }
];
console.log(Personas);
let suma = {
    sumar(a, b) {
        return a + b;
    }
};
console.log(suma.sumar(3, 5)); // Resultado: 8
