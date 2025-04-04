export class Persona {
    public nombre: string;
    protected edad: number;
    private desarrollador: boolean;
  
       
    constructor(nombre: string, edad: number, desarrollador: boolean) {
      this.nombre = nombre;
      this.edad = edad;
      this.desarrollador = desarrollador;
  }
  
  public saludar(): string {
      return `Hola, me llamo ${this.nombre}`;
  }
  
  protected obtenerEdad(): number {
      return this.edad;
  }
  
  private esDev(): boolean {
      return this.desarrollador;
  }
}