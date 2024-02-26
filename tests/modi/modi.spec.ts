import "mocha";
import { expect } from "chai";
import { StringSearchableCollection } from '../../src/modi/string_serchable_collection';
import { NumericSearchableCollection } from '../../src/modi/numeric_serchable_collection';

describe('Search & Collect', () => {
  const numSerchableCollection: NumericSearchableCollection = new NumericSearchableCollection();
	const strSerchableCollection: StringSearchableCollection = new StringSearchableCollection();

  before(() => {
 
  })

  it('Se crea la instancia de la colección numérica', () => {
    expect(numSerchableCollection).to.be.instanceOf(NumericSearchableCollection);
  });

	it('Se crea la instancia de la colección de strings', () => {
    expect(strSerchableCollection).to.be.instanceOf(StringSearchableCollection);
  });

  it('Ambas instancias extienden de la colección de búsqueda abstracta (responden a sus métodos)', () => {
    expect(numSerchableCollection).respondTo('getItem');
		expect(numSerchableCollection).respondTo('addItem');
		expect(numSerchableCollection).respondTo('removeItem');
		expect(numSerchableCollection).respondTo('getNumberOfItems');

		expect(strSerchableCollection).respondTo('getItem');
		expect(strSerchableCollection).respondTo('addItem');
		expect(strSerchableCollection).respondTo('removeItem');
		expect(strSerchableCollection).respondTo('getNumberOfItems');
  }),

	it('Ambas instancias implementan la interfaz de búsqueda (responden a su método)', () => {
		expect(numSerchableCollection).respondTo('search');
		expect(strSerchableCollection).respondTo('search');
	});

	it('La colección numérica puede almacenar números', () => {
		numSerchableCollection.addItem(42);
		numSerchableCollection.addItem(10);
		numSerchableCollection.addItem(42);
		expect(numSerchableCollection.getNumberOfItems()).to.equal(3);
		expect(numSerchableCollection.items).to.eql([42, 10, 42]);
	});

	it('La colección de strings puede almacenar strings', () => {
		strSerchableCollection.addItem("ojo");
		strSerchableCollection.addItem("palabra");
		strSerchableCollection.addItem("rojo");
		expect(strSerchableCollection.getNumberOfItems()).to.equal(3);
		expect(strSerchableCollection.items).to.eql(["ojo", "palabra", "rojo"]);
	});

	it('La colección numérica puede eliminar números'), () => {
		numSerchableCollection.removeItem(42);
		expect(numSerchableCollection.getNumberOfItems()).to.equal(2);
		expect(numSerchableCollection.items).to.eql([10, 42]);
	}

	it('La colección de strings puede eliminar strings'), () => {
		strSerchableCollection.removeItem("ojo");
		expect(strSerchableCollection.getNumberOfItems()).to.equal(2);
		expect(strSerchableCollection.items).to.eql(["palabra", "rojo"]);
	}

	it('La colección numérica puede buscar números', () => {
		expect(numSerchableCollection.search(42)).to.eql([0, 2]);
		expect(numSerchableCollection.search(10)).to.eql([1]);
		expect(numSerchableCollection.search(37)).to.eql([]);
	});

	it('La colección de strings puede buscar strings', () => {
		expect(strSerchableCollection.search("ojo")).deep.equal(["ojo", "rojo"]);
		expect(strSerchableCollection.search("palabra")).deep.equal(["palabra"]);
		expect(strSerchableCollection.search("orange")).to.eql([]);
	});

	it('Se puede obtener un elemento de la colección numérica', () => {
		expect(numSerchableCollection.getItem(0)).to.equal(42);
		expect(numSerchableCollection.getItem(1)).to.equal(10);
		expect(numSerchableCollection.getItem(2)).to.equal(42);
		expect(numSerchableCollection.getItem(3)).to.equal(undefined);
	}),

	it('Se puede obtener un elemento de la colección de strings', () => {
		expect(strSerchableCollection.getItem(0)).to.equal("ojo");
		expect(strSerchableCollection.getItem(1)).to.equal("palabra");
		expect(strSerchableCollection.getItem(2)).to.equal("rojo");
		expect(strSerchableCollection.getItem(3)).to.equal(undefined);
	}),

	it('Se puede obtener el número de elementos de las colecciones', () => {
		expect(numSerchableCollection.getNumberOfItems()).to.equal(3);
		expect(strSerchableCollection.getNumberOfItems()).to.equal(3);
	}),

	it('Se puede eliminar un elemento de la colección numérica', () => {
		numSerchableCollection.removeItem(10);
		expect(numSerchableCollection.getNumberOfItems()).to.equal(2);
		expect(numSerchableCollection.items).to.eql([42, 42]);
	}),

	it('No se puede eliminar un elemento que no existe', () => {
		numSerchableCollection.removeItem(5555);
		expect(numSerchableCollection.getNumberOfItems()).to.equal(2);
		expect(numSerchableCollection.items).to.eql([42, 42]);
	})

});
