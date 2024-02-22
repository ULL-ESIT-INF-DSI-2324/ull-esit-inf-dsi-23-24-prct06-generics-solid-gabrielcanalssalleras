import { Factura } from "./factura";

export class GestorFacturacion {
 private facturas: Factura[] = [];

 constructor(facturas?: Factura[]) {
  if (facturas) this.facturas = facturas;
 }

 getFacturas(): Factura[] {
  return this.facturas;
 }

 addFactura(factura: Factura): void {
  this.facturas.push(factura);
 }

 removeFactura(factura: Factura): void {
  const index = this.facturas.indexOf(factura);
  if (index !== -1) this.facturas.splice(index, 1);
 }

 totalFacturado(): number {
  return this.facturas.reduce(
   (total, factura) => total + factura.getImporte(),
   0
  );
 }
}
