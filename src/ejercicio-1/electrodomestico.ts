import { Enser } from './enser';

export class Electrodomestico implements Enser {
  public nombre: string;
  public descripcion: string;
  public peso: number;
  public cantidad: number;

  public constructor(nombre: string, descripcion: string, peso: number, cantidad: number) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.peso = peso;
    this.cantidad = cantidad;
  }

  public toString(): string {
    return `${this.nombre} (${this.cantidad} unidades)`;
  }
}