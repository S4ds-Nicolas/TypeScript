"use strict";
let nombres = ["Ana", "Juan", "María"];
console.log(nombres);
let edades = [39, 25, 30];
console.log(edades);
let mixto = ["Hola", 42, true];
console.log(mixto);
let personas = [
    {
        nombre: "Avin",
        edad: 30,
        desarrollador: true
    }
];
// Podemos añadir elementos que cumplan con la interfaz
personas.push({
    nombre: "Miranda",
    edad: 28,
    desarrollador: true
});
console.log(personas);
let personaTupla = ["Avin", 30, true];
console.log(personaTupla);
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Lunes"] = 0] = "Lunes";
    DiaSemana[DiaSemana["Martes"] = 1] = "Martes";
    DiaSemana[DiaSemana["Miercoles"] = 2] = "Miercoles";
    DiaSemana[DiaSemana["Jueves"] = 3] = "Jueves";
    DiaSemana[DiaSemana["Viernes"] = 4] = "Viernes";
    DiaSemana[DiaSemana["Sabado"] = 5] = "Sabado";
    DiaSemana[DiaSemana["Domingo"] = 6] = "Domingo";
})(DiaSemana || (DiaSemana = {}));
let dia = DiaSemana.Domingo;
console.log(dia); // Muestra: 6 (índice numérico)
console.log(DiaSemana[dia]); // Muestra: "Domingo" (nombre)
