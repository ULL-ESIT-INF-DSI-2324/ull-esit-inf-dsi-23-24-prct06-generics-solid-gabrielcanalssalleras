import * as fs from 'fs';

/**
 * Clase para escribir en un archivo.
 */
export class FileWriter {
  /**
   * Crea una instancia de FileWriter.
   * @param filePath La ruta del archivo en el que escribir.
   */
  constructor(private filePath: string) {}

  /**
   * Escribe datos en el archivo especificado.
   * @param filePath La ruta del archivo en el que escribir.
   * @param data Los datos a escribir en el archivo.
   * @throws Error si hay algún error durante la escritura en el archivo.
   */
  write(filePath: string, data: string): void {
    try {
      // Validación de la ruta del archivo
      if (filePath === "") throw TypeError;
      // Escritura de los datos en el archivo
      fs.writeFileSync(require.resolve(filePath), data, "utf-8");
      console.log("Archivo escrito exitosamente.");
    } catch (error) {
      let message = "";
      // Obtener el mensaje de error
      if (error instanceof Error) message = error.message;
      // Lanzar un nuevo error con un mensaje descriptivo
      throw new Error(`Error en la edición del fichero: ${message}`);
    }
  }
}
