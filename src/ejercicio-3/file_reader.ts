import * as fs from 'fs';

/**
 * Clase para leer contenido de un archivo.
 */
export class FileReader {
  /**
   * Crea una instancia de FileReader.
   * @param filePath La ruta del archivo a leer.
   */
  constructor(private filePath: string) {}

  /**
   * Lee el contenido del archivo especificado.
   * @param filePath La ruta del archivo a leer.
   * @returns El contenido del archivo como una cadena de texto.
   * @throws Error si hay algún error durante la lectura del archivo.
   */
  read(filePath: string): string {
    try {
      // Validación de la ruta del archivo
      if (filePath === "") throw TypeError;
      // Lectura del archivo y retorno del contenido
      return fs.readFileSync(require.resolve(filePath), "utf-8");
    } catch (error) {
      let message = "";
      // Obtener el mensaje de error
      if (error instanceof Error) message = error.message;
      // Lanzar un nuevo error con un mensaje descriptivo
      throw new Error(`Error en la lectura del fichero: ${message}`);
    }
  }
}
