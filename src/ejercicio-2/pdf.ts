import { Factura } from "./factura";

export class FacturaPDF implements Factura {
 extension: string = "pdf";
 nombre: string = "PDF";
 tipoFichero: string = "texto";
 numeroFactura: number;
 fecha: string;
 concepto: string;
 cliente: string;
 importe: number;

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
 getExtension(): string {
  return this.extension;
 }

 getNombre(): string {
  return this.nombre;
 }

 getTipoFichero(): string {
  return this.tipoFichero;
 }

 getNumeroFactura(): number {
  return this.numeroFactura;
 }

 getFecha(): string {
  return this.fecha;
 }

 getConcepto(): string {
  return this.concepto;
 }

 getCliente(): string {
  return this.cliente;
 }

 getImporte(): number {
  return this.importe;
 }
}
