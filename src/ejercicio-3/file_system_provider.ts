import * as fs from "fs";
import { FileService } from "./file_service";

/**
 * Clase que proporciona operaciones de archivos utilizando el módulo 'fs' de Node.js.
 * Implementa la interfaz FileService.
 */
export class FileSystemProvider implements FileService {
 /**
  * Constructor de la clase FileSystemProvider.
  * @param fsProvider - Una instancia del módulo 'fs' de Node.js.
  */
 constructor(private readonly fsProvider: typeof fs) {}

 /**
  * Lee un archivo del sistema de archivos.
  * @param filePath - La ruta del archivo a leer.
  * @returns El contenido del archivo como una cadena de texto.
  * @throws {Error} Si ocurre un error durante la lectura del archivo.
  */
 read(filePath: string): string {
  try {
   if (filePath === "") throw TypeError;
   return this.fsProvider.readFileSync(require.resolve(filePath), "utf-8");
  } catch (error) {
   let message = "";
   if (error instanceof Error) message = error.message;
   throw new Error(`Error en la lectura del fichero: ${message}`);
  }
 }

 /**
  * Escribe datos en un archivo en el sistema de archivos.
  * @param filePath - La ruta del archivo donde se escribirán los datos.
  * @param data - Los datos a escribir en el archivo.
  * @throws {Error} Si ocurre un error durante la escritura del archivo.
  */
 write(filePath: string, data: string): void {
  try {
   if (filePath === "") throw TypeError;
   this.fsProvider.writeFileSync(require.resolve(filePath), data, "utf-8");
   console.log("Archivo escrito exitosamente.");
  } catch (error) {
   let message = "";
   if (error instanceof Error) message = error.message;
   throw new Error(`Error en la edición del fichero: ${message}`);
  }
 }
}
