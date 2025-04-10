var PersonaClass = /** @class */ (function () {
    function PersonaClass() {
        this.nombre = "";
        this.edad = 0;
    }
    return PersonaClass;
}());
// Resultado equivalente a:
// {
//   readonly nombre: string;
//   readonly edad: number;
// }
var PersonaType = {
    nombre: "Min",
    edad: 30
};
console.log(persona.nombre); // Esto sí se compilará a JavaScript
