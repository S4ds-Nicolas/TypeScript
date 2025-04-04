function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("cualquier valor");
console.log("output1: " + output1);

let output2 = identity<number>(42);
console.log("output2: " + output2);


class Caja<T> {
    private contenido: T;
    
    constructor(valor: T) {
      this.contenido = valor;
    }
    
    obtenerContenido(): T {
      return this.contenido;
    }
  }
  
let cajaDeString = new Caja<string>("libros");
console.log("Contenido de la caja de string", cajaDeString.obtenerContenido());