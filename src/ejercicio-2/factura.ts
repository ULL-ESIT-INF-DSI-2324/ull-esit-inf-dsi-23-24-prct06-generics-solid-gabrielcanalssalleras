export interface Factura {
	extension: string;
	nombre: string;
	tipoFichero: string;	
	numeroFactura: number;
	fecha: string;
	concepto: string;
	cliente: string;
	importe: number;	

	getExtension(): string;
	getNombre(): string;
	getTipoFichero(): string;
	getNumeroFactura(): number;
	getFecha(): string;
	getConcepto(): string;
	getCliente(): string;
	getImporte(): number;
}
