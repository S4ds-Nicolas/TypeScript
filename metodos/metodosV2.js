"use strict";
//parametros opciones
function saludar(nombre, saludo) {
    if (saludo) {
        return `${saludo}, ${nombre}!`;
    }
    else {
        return `Hola, ${nombre}`;
    }
}
console.log(saludar("Amin"));
console.log(saludar("Amin", "Buenos días"));
//parametros multiples
function sumarTodos(...numeros) {
    return numeros.reduce((acumulador, valor) => acumulador + valor, 0);
}
console.log(`El resultado de sumar todos es ${sumarTodos(1, 2, 3, 4, 5)}`);
//valores por defecto
function despedir(nombre, despedida = "Adiós") {
    return `${despedida}, ${nombre}`;
}
console.log(despedir("Amin"));
console.log(despedir("Amin", "Hasta luego"));
