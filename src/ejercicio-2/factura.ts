/**
 * Interfaz que representa una factura.
 */
export interface Factura {
 extension: string;
 nombre: string;
 tipoFichero: string;
 numeroFactura: number;
 fecha: string;
 concepto: string;
 cliente: string;
 importe: number;

 /**
  * Devuelve la extensión del fichero de la factura.
  * @returns La extensión del fichero.
  */
 getExtension(): string;

 /**
  * Devuelve el nombre del fichero de la factura.
  * @returns El nombre del fichero.
  */
 getNombre(): string;

 /**
  * Devuelve el tipo de fichero de la factura.
  * @returns El tipo de fichero.
  */
 getTipoFichero(): string;

 /**
  * Devuelve el número de la factura.
  * @returns El número de la factura.
  */
 getNumeroFactura(): number;

 /**
  * Devuelve la fecha de la factura.
  * @returns La fecha de la factura.
  */
 getFecha(): string;

 /**
  * Devuelve el concepto de la factura.
  * @returns El concepto de la factura.
  */
 getConcepto(): string;

 /**
  * Devuelve el cliente de la factura.
  * @returns El cliente de la factura.
  */
 getCliente(): string;

 /**
  * Devuelve el importe de la factura.
  * @returns El importe de la factura.
  */
 getImporte(): number;
}
