// Variable de tipo string (cadena)
let nombre: string = "min";

// Variable de tipo number (número)
let edad: number = 39;

// Variable de tipo boolean (booleano)
let desarrollador: boolean = true;

// Variable que puede ser undefined o string
let mes: undefined | string;

console.log(`Hola ${nombre}`);
console.log(mes); // Resultado: undefined

mes = "enero";
console.log("mes actualizado:", mes); // Resultado: enero