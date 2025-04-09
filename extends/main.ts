// Declaramos una variable de tipo cadena
string: nombre = "Juan";

// Utilizamos la propiedad length nativa
console.log(nombre.length); // Resultado: 4

// Función que extiende la funcionalidad de length
function obtenerLongitud<T extends { length: number }>(obj: T): number {
    // Obtenemos la longitud del objeto
    const longitud: number = obj.length;
    
    // Obtenemos el tipo del objeto
    const tipo: string = typeof obj;
    
    // Mostramos información adicional
    console.log(`El tipo de dato es ${tipo} y la longitud de este dato es ${longitud}`);
    
    // Retornamos la longitud original
    return obj.length;
}