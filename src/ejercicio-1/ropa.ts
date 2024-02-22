import { Enser } from "./enser";

/**
 * Clase que representa una prenda de ropa.
 * Implementa la interfaz Enser.
 */
export class Ropa implements Enser {
 public nombre: string;
 public descripcion: string;
 public peso: number;
 public cantidad: number;

 /**
  * Constructor de la clase Ropa.
  * @param nombre - El nombre de la prenda de ropa.
  * @param descripcion - La descripción de la prenda de ropa.
  * @param peso - El peso de la prenda de ropa.
  * @param cantidad - La cantidad de unidades de la prenda de ropa.
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
  * Devuelve una cadena de texto que representa a la prenda de ropa.
  * @returns Una cadena de texto con el nombre de la prenda de ropa y la cantidad de unidades.
  */
 public toString(): string {
  return `${this.nombre} (${this.cantidad} unidades)`;
 }
}
