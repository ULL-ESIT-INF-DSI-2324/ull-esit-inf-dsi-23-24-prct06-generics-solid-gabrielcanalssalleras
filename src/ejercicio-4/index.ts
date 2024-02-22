/**
 * Interfaz que representa un objeto imprimible.
 */
interface Printable {
 /**
  * Método para imprimir.
  */
 print(): void;
}

/**
 * Interfaz que representa un objeto escaneable.
 */
interface Scannable {
 /**
  * Método para escanear.
  */
 scan(): void;
}

/**
 * Clase que representa una impresora.
 * Implementa la interfaz Printable.
 */
export class Printer implements Printable {
 /**
  * Método para imprimir.
  */
 print(): void {
  console.log("Printing...");
 }
}

/**
 * Clase que representa un escáner.
 * Implementa la interfaz Scannable.
 */
export class Scanner implements Scannable {
 /**
  * Método para escanear.
  */
 scan(): void {
  console.log("Scanning...");
 }
}

/**
 * Clase que representa una impresora y escáner.
 * Implementa las interfaces Printable y Scannable.
 */
export class PrinterScanner implements Printable, Scannable {
 /**
  * Método para imprimir.
  */
 print(): void {
  console.log("Printing...");
 }

 /**
  * Método para escanear.
  */
 scan(): void {
  console.log("Scanning...");
 }
}

// Client code
const printer = new Printer();
// Printing
printer.print();

const scanner = new Scanner();
// Scanning
scanner.scan();

const printerScanner = new PrinterScanner();
// Printing
printerScanner.print();
// Scanning
printerScanner.scan();
