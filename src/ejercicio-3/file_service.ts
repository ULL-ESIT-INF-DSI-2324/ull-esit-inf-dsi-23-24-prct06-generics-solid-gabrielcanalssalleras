/**
 * Interfaz que representa un servicio de archivos.
 */
export interface FileService {
 /**
  * Lee un archivo del sistema de archivos.
  * @param filePath - La ruta del archivo a leer.
  * @returns El contenido del archivo como una cadena de texto.
  */
 read(filePath: string): string;

 /**
  * Escribe datos en un archivo en el sistema de archivos.
  * @param filePath - La ruta del archivo donde se escribirán los datos.
  * @param data - Los datos a escribir en el archivo.
  */
 write(filePath: string, data: string): void;
}
