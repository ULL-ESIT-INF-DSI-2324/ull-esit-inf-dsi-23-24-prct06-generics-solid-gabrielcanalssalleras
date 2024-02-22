import { Enser } from "./enser";

/**
 * Clase que representa un mueble.
 * Implementa la interfaz Enser.
 */
export class Mueble implements Enser {
 public nombre: string;
 public descripcion: string;
 public peso: number;
 public cantidad: number;

 /**
  * Constructor de la clase Mueble.
  * @param nombre - El nombre del mueble.
  * @param descripcion - La descripción del mueble.
  * @param peso - El peso del mueble.
  * @param cantidad - La cantidad de unidades del mueble.
  */
 public constructor(
  nombre: string,
  descripcion: string,
  peso: number,
  cantidad: number
 ) {
  this.nombre = nombre;
  this.descripcion = descripcion;
  this.peso = peso;
  this.cantidad = cantidad;
 }

 /**
  * Devuelve una cadena de texto que representa al mueble.
  * @returns Una cadena de texto con el nombre del mueble y la cantidad de unidades.
  */
 public toString(): string {
  return `${this.nombre} (${this.cantidad} unidades)`;
 }
}
