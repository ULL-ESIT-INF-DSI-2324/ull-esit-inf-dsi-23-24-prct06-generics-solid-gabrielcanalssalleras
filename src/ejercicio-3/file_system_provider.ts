import * as fs from "fs";
import { FileService } from "./file_service";

export class FileSystemProvider implements FileService {
	constructor(private readonly fsProvider: typeof fs) {}	
	read(filePath: string): string {
		try {			// Vamos a hacerlo síncrono porque no se si ya podemos usar programación asíncrona
			if (filePath === "") throw TypeError;
			return this.fsProvider.readFileSync(require.resolve(filePath), "utf-8");
		} catch (error) {	
			let message = "";			
			if (error instanceof Error) message = error.message;			
			throw new Error(`Error en la lectura del fichero: ${message}`);
		}
	}	

	write(filePath: string, data: string): void {
		try {
			if (filePath === "") throw TypeError;
			this.fsProvider.writeFileSync(require.resolve(filePath), data, "utf-8");			console.log("Archivo escrito exitosamente.");
		} catch (error) {			
			let message = "";			
			if (error instanceof Error) message = error.message;			
			throw new Error(`Error en la edición del fichero: ${message}`);
		}
	}
}
