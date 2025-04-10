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