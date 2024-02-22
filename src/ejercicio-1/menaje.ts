import { Enser } from "./enser";

/**
 * Clase Menaje que implementa la interfaz Enser.
 */
export class Menaje implements Enser {
 public nombre: string;
 public descripcion: string;
 public peso: number;
 public cantidad: number;

 /**
  * Constructor de la clase Menaje.
  * @param nombre - El nombre del menaje.
  * @param descripcion - La descripción del menaje.
  * @param peso - El peso del menaje.
  * @param cantidad - La cantidad de menajes.
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
  * Convierte el menaje a una cadena de texto.
  * @returns Una cadena de texto que representa al menaje.
  */
 public toString(): string {
  return `${this.nombre} (${this.cantidad} unidades)`;
 }
}
