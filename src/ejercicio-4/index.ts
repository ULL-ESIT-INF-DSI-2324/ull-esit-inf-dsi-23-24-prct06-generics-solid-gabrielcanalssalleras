interface PrintableScannable {
  print(): void
  scan(): void
}

class Printer implements PrintableScannable {
  print(): void {
    console.log('Printing...')
  }

  scan(): void { }
}

class Scanner implements PrintableScannable {
  print(): void { }

  scan(): void {
    console.log('Scanning...')
  }
}

class PrinterScanner implements PrintableScannable {
  print(): void {
    console.log('Printing...')
  }

  scan(): void {
    console.log('Scanning...')
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