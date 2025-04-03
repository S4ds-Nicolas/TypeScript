let variableAny: any;
variableAny = "hello";     // Cadena de texto
variableAny = 42;          // Número
variableAny = true;        // Booleano


let variableDesconocida: unknown;

variableDesconocida = "hello";
// variableDesconocida = 42;
// variableDesconocida = true;

if (typeof variableDesconocida === "string") {
    console.log("Variable unknown es una cadena:", variableDesconocida);
}

function arrojarError(mensaje: string): never {
    throw new Error(mensaje);
}

// arrojarError("Esto es un error");


function logMessage(message: string): void {
    console.log(message);
    // No hay return
}

logMessage("Este es un mensaje de log");

