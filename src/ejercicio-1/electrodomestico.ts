import { Enser } from "./enser";

/**
 * Clase Electrodomestico que implementa la interfaz Enser.
 */
export class Electrodomestico implements Enser {
 public nombre: string;
 public descripcion: string;
 public peso: number;
 public cantidad: number;

 /**
  * Constructor de la clase Electrodomestico.
  * @param nombre - El nombre del electrodoméstico.
  * @param descripcion - La descripción del electrodoméstico.
  * @param peso - El peso del electrodoméstico.
  * @param cantidad - La cantidad de electrodomésticos.
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
  * Convierte el electrodoméstico a una cadena de texto.
  * @returns Una cadena de texto que representa al electrodoméstico.
  */
 public toString(): string {
  return `${this.nombre} (${this.cantidad} unidades)`;
 }
}
