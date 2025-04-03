let nombres: string[] = ["Ana", "Juan", "María"];
console.log(nombres);

let edades: number[] = [39, 25, 30];
console.log(edades); 

let mixto: any[] = ["Hola", 42, true];
console.log(mixto);

interface Persona {
    nombre: string;
    edad: number;
    desarrollador: boolean;
}

let personas: Persona[] = [
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


let personaTupla: [string, number, boolean] = ["Avin", 30, true];
console.log(personaTupla);


enum DiaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

let dia: DiaSemana = DiaSemana.Domingo;
console.log(dia); // Muestra: 6 (índice numérico)
console.log(DiaSemana[dia]); // Muestra: "Domingo" (nombre)