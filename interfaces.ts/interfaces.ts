interface Personas {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;
    describir(): void;
    esMayor(): void;
}

let persona: Personas = {
    nombre: "Juan",
    edad: 30,
    esDesarrollador: true,
    describir: function (): void {
        throw new Error("Function not implemented.");
    },
    esMayor: function (): void {
        throw new Error("Function not implemented.");
    }
};
  
console.log(persona);

let Personas: Personas[] = [
    {
        nombre: "Juan",
        edad: 30,
        esDesarrollador: true,
        describir: function (): void {
            throw new Error("Function not implemented.");
        },
        esMayor: function (): void {
            throw new Error("Function not implemented.");
        }
    },
    {
        nombre: "María",
        edad: 25,
        esDesarrollador: false,
        describir: function (): void {
            throw new Error("Function not implemented.");
        },
        esMayor: function (): void {
            throw new Error("Function not implemented.");
        }
    }
  ];
  
console.log(Personas);

interface Sumar {
sumar(a: number, b: number): number;
}

let suma: Sumar = {
sumar(a: number, b: number): number {
    return a + b;
}
};

console.log(suma.sumar(3, 5)); // Resultado: 8