import { Enser } from "./enser";

/**
 * Clase Caja que almacena objetos de tipo Enser.
 */
export class Caja<T extends Enser> {
 private _contenido: T[] = [];
 private _pesoMaximo: number;

 /**
  * Obtiene el contenido de la caja.
  * @returns El contenido de la caja.
  */
 public get contenido(): T[] {
  return this._contenido;
 }

 /**
  * Obtiene el peso máximo que puede soportar la caja.
  * @returns El peso máximo de la caja.
  */
 public get pesoMaximo(): number {
  return this._pesoMaximo;
 }

 /**
  * Establece el peso máximo que puede soportar la caja.
  * @param pesoMaximo - El nuevo peso máximo de la caja.
  */
 public set pesoMaximo(pesoMaximo: number) {
  this._pesoMaximo = pesoMaximo;
 }

 /**
  * Constructor de la clase Caja.
  * @param pesoMaximo - El peso máximo que puede soportar la caja.
  * @param enseres - Los enseres iniciales que contendrá la caja.
  */
 public constructor(pesoMaximo: number, enseres: T[] = []) {
  this._pesoMaximo = pesoMaximo;
  enseres.forEach((enser) => {
   this.agregarEnser(enser);
  });
 }

 /**
  * Agrega un enser a la caja.
  * @param enser - El enser a agregar.
  * @throws {Error} Si el enser supera el peso máximo de la caja.
  */
 public agregarEnser(enser: T): void {
  if (!this.cabeEnser(enser))
   throw new Error("No se puede agregar el enser porque supera el peso máximo");
  this._contenido.push(enser);
 }

 /**
  * Calcula el peso total de los enseres en la caja.
  * @returns El peso total de los enseres.
  */
 public calcularPeso(): number {
  return this._contenido.reduce(
   (acum, enser) => acum + enser.peso * enser.cantidad,
   0
  );
 }

 /**
  * Determina si un enser cabe en la caja sin superar el peso máximo.
  * @param enser - El enser a verificar.
  * @returns Verdadero si el enser cabe en la caja, falso en caso contrario.
  */
 public cabeEnser(enser: T): boolean {
  return this.calcularPeso() + enser.peso * enser.cantidad <= this._pesoMaximo;
 }
}
