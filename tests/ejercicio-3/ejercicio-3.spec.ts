import "mocha";
import { expect } from "chai";
import { FileReader } from '../../src/ejercicio-3/file_reader';
import { FileWriter } from '../../src/ejercicio-3/file_writer';

describe('File Manager', () => {
  const fileWriter: FileWriter = new FileWriter('./example.txt');
  const fileReader: FileReader = new FileReader('./example.txt');
  let newData: string;
  before(() => {
    fileWriter.write('./example.txt', 'hola mundo');
		newData = 'hola mundo cruel';
  })

  it('Se crea la instancia del lector de Ficheros', () => {
    expect(fileReader).to.be.instanceOf(FileReader);
  });

  it('Se crea la instancia del escritor de Ficheros', () => {
    expect(fileWriter).to.be.instanceOf(FileWriter);
  }),

  it('Se pueden leer los datos de un archivo', () => {
		const currentContent = fileReader.read('./example.txt');
    expect(currentContent).to.be.equal('hola mundo');
  }),
  
  it('Se puede escribir en un archivo', () => {
		fileWriter.write('./example.txt', newData);
    const currentContent = fileReader.read('./example.txt');
    expect(currentContent).to.be.equal(newData);
  }),

	it('Saltar error si el archivo no existe al leer', () => {
    expect(() => fileReader.read('./example2.txt')).to.throw(Error);
    expect(() => fileReader.read("")).to.throw(Error);
	}),

	it('Saltar error si el archivo no existe al escribir', () => {
    expect(() => fileWriter.write('./example2.txt', 'hola')).to.throw(Error);
    expect(() => fileWriter.write("", 'hola')).to.throw(Error);
	})
});
