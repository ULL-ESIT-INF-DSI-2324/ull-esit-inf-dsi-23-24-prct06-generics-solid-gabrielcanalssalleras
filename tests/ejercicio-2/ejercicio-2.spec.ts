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

 it("Pueden comprobarse los atributos de la factura en HTML", () => {
	expect(factura1.getExtension()).to.be.equal("html");
	expect(factura1.getNombre()).to.be.equal("HTML");
	expect(factura1.getTipoFichero()).to.be.equal("texto");
	expect(factura1.getNumeroFactura()).to.be.equal(1);
	expect(factura1.getFecha()).to.be.equal("2021-01-01");
	expect(factura1.getConcepto()).to.be.equal("Compra de material");
	expect(factura1.getCliente()).to.be.equal("Juan");
	expect(factura1.getImporte()).to.be.equal(100);
 }),

 it("Se crea la instancia de la factura en PDF", () => {
	expect(factura2).to.be.instanceOf(FacturaPDF);
 }),

 it("Pueden comprobarse los atributos de la factura en PDF", () => {
	expect(factura2.getExtension()).to.be.equal("pdf");
	expect(factura2.getNombre()).to.be.equal("PDF");
	expect(factura2.getTipoFichero()).to.be.equal("texto");	
	expect(factura2.getNumeroFactura()).to.be.equal(2);
	expect(factura2.getFecha()).to.be.equal("2021-01-02");
	expect(factura2.getConcepto()).to.be.equal("Compra de regalos");
	expect(factura2.getCliente()).to.be.equal("Ana");
	expect(factura2.getImporte()).to.be.equal(200);
 }),

 it("Se crea la instancia del gestor de facturación", () => {
	expect(gestor).to.be.instanceOf(GestorFacturacion);
 });

 it ("Puede crearse un gestor con facturas", () => {
	const gestorConFacturas = new GestorFacturacion([factura1, factura2]);
	expect(gestorConFacturas.getFacturas()).to.have.lengthOf(2);
 }),

 it("Se pueden añadir facturas al gestor", () => {
	gestor.addFactura(factura1);
	gestor.addFactura(factura2);
	expect(gestor.getFacturas()).to.have.lengthOf(2);
 }),

 it("Se pueden eliminar facturas del gestor", () => {
	gestor.removeFactura(factura1);
	expect(gestor.getFacturas()).to.have.lengthOf(1);
 }),

 it("No se eliminan facturas que no existen", () => {
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
