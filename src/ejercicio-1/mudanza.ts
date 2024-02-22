import { Caja } from './caja';
import { Enser } from './enser';

export class Mudanza<T extends Enser>{
  private _cajas: Caja<T>[] = [];

  public get cajas(): Caja<T>[] {
    return this._cajas;
  }

  public agregarCaja(caja: Caja<T>): void {
    this._cajas.push(caja);
  }

  public agregarEnser(caja: Caja<T>, enser: T): void {
    this._cajas.forEach(caja => {
      if (caja.cabeEnser(enser)) caja.agregarEnser(enser);
    });
    this._cajas.push(new Caja(enser.peso, [enser]));
  }

  public calcularPesoTotal(): number {
    return this._cajas.reduce((acum, caja) => acum + caja.calcularPeso(), 0);
  }

  public buscarEnser(nombre: string): string  {
    let nombreEnser: string = 'No se ha encontrado el enser';
    this.cajas.some(caja => {
      caja.contenido.some(enser => {
        if (enser.nombre == nombre) nombreEnser = enser.toString();
      });
    }); 
    return nombreEnser;
  }
}