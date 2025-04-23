type PersonaType = {
    nombre: string;
    edad: number;
}

class PersonaClass {
    nombre: string;
    edad: number;

    constructor() {
        this.nombre = "";
        this.edad = 0;
    }
}

type Partials<T> = {
    [P in keyof T]?: T[P];
};

  
type PersonaParcial = Partial<PersonaType>;
  // Resultado equivalente a:
  // {
  //   nombre?: string;
//   edad?: number;
// }

type ReadOnly<T> = {
readonly [P in keyof T]: T[P];
};

type PersonaSoloLectura = ReadOnly<PersonaType>;
// Resultado equivalente a:
// {
//   readonly nombre: string;
//   readonly edad: number;
// }

// let persona: PersonaSoloLectura = {
//     nombre: "Min",
//     edad: 30
// };
  
console.log(persona.nombre); // Esto sí se compilará a JavaScript

type Variantes = "pequeño" | "mediano" | "grande";
type ClaseCSS = `boton-${Variantes}`;

// let botonPequeño: ClaseCSS = "boton-pequeño";
// let botonMediano: ClaseCSS = "boton-mediano";
// let botonGrande: ClaseCSS = "boton-grande";


type EsNumero<T> = T extends number ? true : false;

function esNumero<T>(valor: T): EsNumero<T> {
  return (typeof valor === "number") as any;
}

const resultado1 = esNumero(42);       // true
const resultado2 = esNumero("hello");  // false

console.log(resultado1);
console.log(resultado2);