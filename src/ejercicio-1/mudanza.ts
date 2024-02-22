import { Caja } from "./caja";
import { Enser } from "./enser";

/**
 * Clase que representa una mudanza.
 * @template T - Debe ser una instancia de Enser o una subclase de Enser.
 */
export class Mudanza<T extends Enser> {
 private _cajas: Caja<T>[] = [];

 /**
  * Getter para las cajas de la mudanza.
  * @returns Las cajas de la mudanza.
  */
 public get cajas(): Caja<T>[] {
  return this._cajas;
 }

 /**
  * Agrega una caja a la mudanza.
  * @param caja - La caja a agregar.
  */
 public agregarCaja(caja: Caja<T>): void {
  this._cajas.push(caja);
 }

 /**
  * Agrega un enser a una caja de la mudanza. Si no cabe en ninguna caja existente, se crea una nueva caja.
  * @param caja - La caja donde se intentará agregar el enser.
  * @param enser - El enser a agregar.
  */
 public agregarEnser(caja: Caja<T>, enser: T): void {
  this._cajas.forEach((caja) => {
   if (caja.cabeEnser(enser)) caja.agregarEnser(enser);
  });
  this._cajas.push(new Caja(enser.peso, [enser]));
 }

 /**
  * Calcula el peso total de la mudanza.
  * @returns El peso total de la mudanza.
  */
 public calcularPesoTotal(): number {
  return this._cajas.reduce((acum, caja) => acum + caja.calcularPeso(), 0);
 }

 /**
  * Busca un enser por nombre en la mudanza.
  * @param nombre - El nombre del enser a buscar.
  * @returns Una cadena con la descripción del enser si se encuentra, o un mensaje indicando que no se encontró.
  */
 public buscarEnser(nombre: string): string {
  let nombreEnser: string = "No se ha encontrado el enser";
  this.cajas.some((caja) => {
   caja.contenido.some((enser) => {
    if (enser.nombre == nombre) nombreEnser = enser.toString();
   });
  });
  return nombreEnser;
 }
}
