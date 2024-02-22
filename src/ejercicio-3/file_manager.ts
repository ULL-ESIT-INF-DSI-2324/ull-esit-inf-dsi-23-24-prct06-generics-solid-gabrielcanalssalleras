import { FileService } from "./file_service";

/**
 * Clase que representa un gestor de archivos.
 */
export class FileManager {
 /**
  * Constructor de la clase FileManager.
  * @param fileOperation - Una instancia de FileService para realizar operaciones de archivo.
  */
 constructor(private readonly fileOperation: FileService) {}

 /**
  * Lee un archivo del sistema de archivos.
  * @param filePath - La ruta del archivo a leer.
  * @returns El contenido del archivo como una cadena de texto.
  */
 public readFile(filePath: string): string {
  return this.fileOperation.read(filePath);
 }

 /**
  * Escribe datos en un archivo en el sistema de archivos.
  * @param filePath - La ruta del archivo donde se escribirán los datos.
  * @param data - Los datos a escribir en el archivo.
  */
 public writeFile(filePath: string, data: string): void {
  this.fileOperation.write(filePath, data);
 }
}
