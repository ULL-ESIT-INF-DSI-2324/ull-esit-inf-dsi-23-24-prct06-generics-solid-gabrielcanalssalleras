import "mocha";
import { expect } from "chai";
import { Printer, Scanner, PrinterScanner } from '../../src/ejercicio-4/index';
import sinon from 'sinon';

describe('Printer Scanner', () => {
  const printer: Printer = new Printer();
	const scanner: Scanner = new Scanner();
	const printerScanner: PrinterScanner = new PrinterScanner();

	beforeEach(() => {
		sinon.restore();
	});

  it('Se crea la instancia de la impresora', () => {
		expect(printer).to.be.instanceOf(Printer);
	});

  it('Se crea la instancia del escáner', () => {
		expect(scanner).to.be.instanceOf(Scanner);
	});

  it('Se crea la instancia de la impresora-escáner', () => {
		expect(printerScanner).to.be.instanceOf(PrinterScanner);
	});
  
  it('La impresora imprime', () => {
		const consoleLog = sinon.spy(console, 'log');
		expect(printer.print()).to.be.undefined;
		expect(consoleLog.calledOnce).to.be.true;
		expect(consoleLog.calledWith('Printing...')).to.be.true;
	});

	it('El escáner escanea', () => {
		const consoleLog = sinon.spy(console, 'log');
		expect(scanner.scan()).to.be.undefined;
		expect(consoleLog.calledOnce).to.be.true;
		expect(consoleLog.calledWith('Scanning...')).to.be.true;
	});

	it('La impresora-escáner imprime', () => {
		const consoleLog = sinon.spy(console, 'log');
		expect(printerScanner.print()).to.be.undefined;
		expect(consoleLog.calledOnce).to.be.true;
		expect(consoleLog.calledWith('Printing...')).to.be.true;
	});

	it('La impresora-escáner escanea', () => {
		const consoleLog = sinon.spy(console, 'log');
		expect(printerScanner.scan()).to.be.undefined;
		expect(consoleLog.calledOnce).to.be.true;
		expect(consoleLog.calledWith('Scanning...')).to.be.true;
	});
});
