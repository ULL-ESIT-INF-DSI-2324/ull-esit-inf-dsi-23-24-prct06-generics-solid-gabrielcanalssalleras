import * as fs from 'fs';
import "mocha";
import { expect } from "chai";
import { FileManager } from '../../src/ejercicio-3/file_manager';
import { FileSystemProvider } from '../../src/ejercicio-3/file_system_provider';

describe('File Manager', () => {
  let fsProvider: FileSystemProvider;
  let fsManager: FileManager;
	let currentContent: string;
	let newData: string;

  before(() => {
    fsProvider = new FileSystemProvider(fs);
		fsManager = new FileManager(fsProvider);
		fsManager.writeFile('./example.txt', 'hola mundo');
		newData = 'hola mundo cruel';
  })

  it('Se crea la instancia del proveedor del servicio', () => {
    expect(fsProvider).to.be.instanceOf(FileSystemProvider);
  });

  it('Se crea la instancia del gestor de archivos', () => {
		expect(fsManager).to.be.instanceOf(FileManager);
  });

  it('Se pueden leer los datos de un archivo', () => {
		currentContent = fsManager.readFile('./example.txt');
		expect(currentContent).to.be.a('string');
		expect(currentContent).to.be.equal('hola mundo');
  }),
  
  it('Se puede escribir en un archivo', () => {
		fsManager.writeFile('./example.txt', newData);
		currentContent = fsManager.readFile('./example.txt');
		expect(currentContent).to.be.equal(newData);
  })
});
