
import "mocha";
import { expect } from "chai";
import { Mudanza } from '../../src/ejercicio-1/mudanza';
import { Enser } from '../../src/ejercicio-1/enser';
import { Caja } from '../../src/ejercicio-1/caja';
import { Ropa } from '../../src/ejercicio-1/ropa';
import { Menaje } from '../../src/ejercicio-1/menaje';
import { Mueble } from '../../src/ejercicio-1/mueble';
import { Electrodomestico } from '../../src/ejercicio-1/electrodomestico';

describe('Mudanza', () => {
  let mudanza: Mudanza<Enser>;
  let caja1: Caja<Enser>;
  let caja2: Caja<Enser>;
  let caja3: Caja<Enser>;
  let ropa1: Ropa;
  let menaje1: Menaje;
  let menaje2: Menaje;
  let mueble1: Mueble;
  let mueble2: Mueble;
  let electrodomestico1: Electrodomestico;


  before(() => {
    mudanza = new Mudanza<Enser>();
    caja1 = new Caja<Enser>(100);
    caja2 = new Caja<Enser>(200);
    caja3 = new Caja<Enser>(300);
    ropa1 = new Ropa('Abrigo', 'Ropa de invierno', 10, 2);
    menaje1 = new Menaje('Vajilla', 'Platos y vasos', 30, 1);
    menaje2 = new Menaje('Bandeja', 'Cuberteria', 5, 2);
    mueble1 = new Mueble('Lámpara', 'Mueble de comedor', 50, 1);
    mueble2 = new Mueble('Silla', 'Mueble de comedor', 20, 1);
    electrodomestico1 = new Electrodomestico('Lavadora', 'Electrodoméstico cotidiano', 150, 1);
  })

  it('Se crea la instancia de la Mudanza', () => {
    expect(mudanza).to.be.instanceOf(Mudanza);
  });

  it('Se crea la instancia de la Caja', () => {
    expect(caja1).to.be.instanceOf(Caja);
    expect(caja2).to.be.instanceOf(Caja);
    expect(caja3).to.be.instanceOf(Caja);
  });

  it('Se pueden añadir enseres a la caja', () => {
    caja1.agregarEnser(ropa1);
    caja1.agregarEnser(menaje1);
    caja1.agregarEnser(mueble1);
    caja2.agregarEnser(electrodomestico1);
    expect(caja1.contenido).to.have.lengthOf(3);
  }),
  
  it('Si se intenta añadir un enser que no cabe en la caja, se lanza un error', () => {
    expect(() => caja1.agregarEnser(menaje1)).to.throw('No se puede agregar el enser porque supera el peso máximo');
    expect(() => caja1.agregarEnser(mueble2)).to.throw('No se puede agregar el enser porque supera el peso máximo');
  }),

  it('Se puede comprobar si un enser cabe en la caja', () => {
    expect(caja2.cabeEnser(menaje2)).to.be.true;
    expect(caja1.cabeEnser(electrodomestico1)).to.be.false;
  }),

  it('Se puede calcular el peso total de la caja', () => {
    expect(caja1.calcularPeso()).to.be.equal(100);
    expect(caja2.calcularPeso()).to.be.equal(150);
  }),

  it('Se pueden añadir cajas a la mudanza', () => {
    mudanza.agregarCaja(caja1);
    mudanza.agregarCaja(caja2);
    expect(mudanza.cajas).to.have.lengthOf(2);
  })

  it('Se pueden añadir enseres a la mudanza', () => {
    expect(mudanza.agregarEnser(caja2, electrodomestico1)).to.not.throw;
    expect(mudanza.cajas[1].contenido).to.have.lengthOf(1);
    const caja5 = new Caja<Enser>(1000);
    mudanza.agregarCaja(caja5);
    expect(mudanza.agregarEnser(caja5, electrodomestico1)).to.not.throw;
  }),

  it('Se puede calcular el peso total de la mudanza', () => {
    expect(mudanza.calcularPesoTotal()).to.be.equal(700);
  }),

  it('Se puede buscar un enser en la mudanza', () => {
    expect(mudanza.buscarEnser('Abrigo')).to.be.equal('Abrigo (2 unidades)');
    expect(mudanza.buscarEnser('Lámpara')).to.be.equal('Lámpara (1 unidades)');
    expect(mudanza.buscarEnser('Lavadora')).to.be.equal('Lavadora (1 unidades)');
    expect(mudanza.buscarEnser('Vajilla')).to.be.equal('Vajilla (1 unidades)');
  }),

  it('Si se intenta buscar un enser que no existe, se devuelve un mensaje explicativo', () => {
    expect(mudanza.buscarEnser('Silla')).to.be.equal('No se ha encontrado el enser');
  }),

  it('Puede modificarse el peso máximo de una caja', () => {
    expect(caja3.pesoMaximo).to.be.equal(300);
    caja3.pesoMaximo = 400;
    expect(caja3.pesoMaximo).to.be.equal(400);
  })
});
