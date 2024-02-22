import "mocha";
import { expect } from "chai";
import { Factura } from "../../src/ejercicio-2/factura";
import { FacturaPDF } from "../../src/ejercicio-2/pdf";
import { FacturaHTML } from "../../src/ejercicio-2/html";
import { GestorFacturacion } from "../../src/ejercicio-2/gestor_facturacion";

describe("Gestor de Facturación", () => {
 const gestor = new GestorFacturacion();
 let factura1: Factura;
 let factura2: Factura;

 before(() => {
  factura1 = new FacturaHTML(
		1,
		"2021-01-01",
		"Compra de material",
		"Juan",
		100
	);

	factura2 = new FacturaPDF(
		2,
		"2021-01-02",
		"Compra de regalos",
		"Ana",
		200
	);
 });

 it("Se crea la instancia de la factura en HTML", () => {
	expect(factura1).to.be.instanceOf(FacturaHTML);
 });

 it("Se crea la instancia de la factura en PDF", () => {
	expect(factura2).to.be.instanceOf(FacturaPDF);
 }),

 it("Se crea la instancia del gestor de facturación", () => {
	expect(gestor).to.be.instanceOf(GestorFacturacion);
 });

 it("Se pueden añadir facturas al gestor", () => {
	gestor.addFactura(factura1);
	gestor.addFactura(factura2);
	expect(gestor.getFacturas()).to.have.lengthOf(2);
 }),

 it("Se pueden eliminar facturas del gestor", () => {
	gestor.removeFactura(factura1);
	expect(gestor.getFacturas()).to.have.lengthOf(1);
 }),

 it("Se puede calcular el total facturado", () => {
	expect(gestor.totalFacturado()).to.be.equal(200);
	gestor.addFactura(factura1);
	expect(gestor.totalFacturado()).to.be.equal(300);
 }),

 it("Se pueden crear un nuevo tipo de factura sin modificar el código anterior", () => {
	
	class FacturaTXT implements Factura {
		extension: string = "txt";
		nombre: string = "TXT";
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


	const factura3: Factura = new FacturaTXT(
		3,
		"2021-01-03",
		"Compra de material",
		"Juan",
		300
	);
	gestor.addFactura(factura3);

	expect(gestor.getFacturas()).to.have.lengthOf(3);
	expect(gestor.totalFacturado()).to.be.equal(600);
	expect(factura3).to.be.instanceOf(FacturaTXT);

	});

});
