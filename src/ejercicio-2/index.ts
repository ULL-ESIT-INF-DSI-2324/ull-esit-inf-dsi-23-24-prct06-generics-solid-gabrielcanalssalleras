import { Factura } from "./factura";
import { FacturaHTML } from "./html";
import { FacturaPDF } from "./pdf";
import { GestorFacturacion } from "./gestor_facturacion";

const gestor = new GestorFacturacion();

const factura1: Factura = new FacturaHTML(
 1,
 "2021-01-01",
 "Compra de material",
 "Juan",
 100
);
const factura2: Factura = new FacturaPDF(
 2,
 "2021-01-02",
 "Compra de material",
 "Juan",
 200
);

gestor.addFactura(factura1);
gestor.addFactura(factura2);

console.log(gestor.totalFacturado());

gestor.removeFactura(factura1);

console.log(gestor.totalFacturado());

console.log(gestor.getFacturas());
