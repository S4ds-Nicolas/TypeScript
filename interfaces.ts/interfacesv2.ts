interface Direccion {
    calle: string;
    numero: number;
    ciudad?: string;
  }


// Implementación sin la propiedad opcional
const direccion: Direccion = {
    calle: "Calle Falsa",
    numero: 123
  };
  
  // Implementación incluyendo la propiedad opcional
  const direccionCompleta: Direccion = {
    calle: "Calle Falsa",
    numero: 123,
    ciudad: "Springfield"
  };

interface PersonaReadOnly {
    readonly nombre: string;
    readonly edad: number;
    readonly esDesarrollador: boolean;
}
const personaRead: PersonaReadOnly = {
    nombre: "Amin",
    edad: 30,
    esDesarrollador: true
  };

  // Esto generará un error
//personaRead.nombre = "Marce"; // Error: No se puede asignar a 'nombre' porque es una propiedad de solo lectura

//interface extendida

interface Empleado extends Persona {
    puesto: string;
}

const empleado: Empleado = {
    nombre: "Amin",
    edad: 30,
    puesto: "Desarrollador Senior",
    desarrollador: false
};