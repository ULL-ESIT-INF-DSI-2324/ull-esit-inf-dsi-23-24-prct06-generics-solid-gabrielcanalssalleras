import { Enser } from './enser';

export class Caja<T extends Enser>{
  private _contenido: T[] = [];
  private _pesoMaximo: number;

  public get contenido(): T[] {
    return this._contenido;
  }

  public get pesoMaximo(): number {
    return this._pesoMaximo;
  }

  public set pesoMaximo(pesoMaximo: number) {
    this._pesoMaximo = pesoMaximo;
  }

  public constructor(pesoMaximo: number, enseres: T[] = []) {
    this._pesoMaximo = pesoMaximo;
    enseres.forEach(enser => {this.agregarEnser(enser);});
  }

  public agregarEnser(enser: T): void {
    if (!this.cabeEnser(enser)) throw new Error('No se puede agregar el enser porque supera el peso máximo');
    this._contenido.push(enser);
  }

  public calcularPeso(): number {
    return this._contenido.reduce((acum, enser) => acum + enser.peso * enser.cantidad, 0);
  }

  public cabeEnser(enser: T): boolean {
    return this.calcularPeso() + enser.peso * enser.cantidad <= this._pesoMaximo;
  }
}