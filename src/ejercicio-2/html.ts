import { Factura } from "./factura";

/**
 * Clase que representa una factura en formato HTML.
 * Implementa la interfaz Factura.
 */
export class FacturaHTML implements Factura {
 extension: string = "html";
 nombre: string = "HTML";
 tipoFichero: string = "texto";
 numeroFactura: number;
 fecha: string;
 concepto: string;
 cliente: string;
 importe: number;

 /**
  * Constructor de la clase FacturaHTML.
  * @param numeroFactura - El número de la factura.
  * @param fecha - La fecha de la factura.
  * @param concepto - El concepto de la factura.
  * @param cliente - El cliente de la factura.
  * @param importe - El importe de la factura.
  */
 constructor(
  numeroFactura: number,
  fecha: string,
  concepto: string,
  cliente: string,
  importe: number
 ) {
  this.numeroFactura = numeroFactura;
  this.fecha = fecha;
  this.concepto = concepto;
  this.cliente = cliente;
  this.importe = importe;
 }

 /**
  * Devuelve la extensión del fichero de la factura.
  * @returns La extensión del fichero.
  */
 getExtension(): string {
  return this.extension;
 }

 /**
  * Devuelve el nombre del fichero de la factura.
  * @returns El nombre del fichero.
  */
 getNombre(): string {
  return this.nombre;
 }

 /**
  * Devuelve el tipo de fichero de la factura.
  * @returns El tipo de fichero.
  */
 getTipoFichero(): string {
  return this.tipoFichero;
 }

 /**
  * Devuelve el número de la factura.
  * @returns El número de la factura.
  */
 getNumeroFactura(): number {
  return this.numeroFactura;
 }

 /**
  * Devuelve la fecha de la factura.
  * @returns La fecha de la factura.
  */
 getFecha(): string {
  return this.fecha;
 }

 /**
  * Devuelve el concepto de la factura.
  * @returns El concepto de la factura.
  */
 getConcepto(): string {
  return this.concepto;
 }

 /**
  * Devuelve el cliente de la factura.
  * @returns El cliente de la factura.
  */
 getCliente(): string {
  return this.cliente;
 }

 /**
  * Devuelve el importe de la factura.
  * @returns El importe de la factura.
  */
 getImporte(): number {
  return this.importe;
 }
}
