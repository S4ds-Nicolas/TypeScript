"use strict";
// Seleccionando por nombre de etiqueta
const h1 = document.querySelector('h1');
console.log(h1 === null || h1 === void 0 ? void 0 : h1.textContent);
// Seleccionando por clase
let titulo = document.querySelector('.title');
console.log(titulo === null || titulo === void 0 ? void 0 : titulo.textContent);
// Seleccionando por ID
const message = document.querySelector('#message');
console.log(message.placeholder);
