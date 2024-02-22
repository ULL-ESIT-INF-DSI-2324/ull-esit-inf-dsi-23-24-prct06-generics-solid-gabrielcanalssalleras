import { Factura } from "./factura";

/**
 * Clase que representa un gestor de facturación.
 */
export class GestorFacturacion {
 private facturas: Factura[] = [];

 /**
  * Constructor de la clase GestorFacturacion.
  * @param facturas - Un array opcional de facturas para inicializar el gestor.
  */
 constructor(facturas?: Factura[]) {
  if (facturas) this.facturas = facturas;
 }

 /**
  * Devuelve las facturas del gestor.
  * @returns Un array de facturas.
  */
 getFacturas(): Factura[] {
  return this.facturas;
 }

 /**
  * Añade una factura al gestor.
  * @param factura - La factura a añadir.
  */
 addFactura(factura: Factura): void {
  this.facturas.push(factura);
 }

 /**
  * Elimina una factura del gestor.
  * @param factura - La factura a eliminar.
  */
 removeFactura(factura: Factura): void {
  const index = this.facturas.indexOf(factura);
  if (index !== -1) this.facturas.splice(index, 1);
 }

 /**
  * Calcula el total facturado por el gestor.
  * @returns El total facturado.
  */
 totalFacturado(): number {
  return this.facturas.reduce(
   (total, factura) => total + factura.getImporte(),
   0
  );
 }
}
