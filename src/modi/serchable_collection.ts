import { Collectable } from "./collectable";
import { Searchable } from "./serchable";

/**
 * Representa una colección que puede ser buscada y manipulada.
 * @template T - El tipo de elementos en la colección.
 */
export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
  /** Array interno para almacenar elementos en la colección. */
  private _items: T[] = [];

  /**
   * Agrega un elemento a la colección.
   * @param item - El elemento que se va a agregar.
   */
  addItem(item: T): void {
    this._items.push(item);
  }

  /**
   * Obtiene un elemento de la colección según su índice.
   * @param index - El índice del elemento a recuperar.
   * @returns El elemento en el índice especificado, o undefined si el índice está fuera de límites.
   */
  getItem(index: number): T | undefined {
    return this._items[index];
  }

  /** Obtiene el array de elementos en la colección. */
  get items(): T[] {
    return this._items;
  }

  /**
   * Elimina un elemento de la colección.
   * @param item - El elemento que se va a eliminar.
   */
  removeItem(item: T): void {
    const index = this._items.indexOf(item);
    if (index !== -1) this._items.splice(index, 1);
  }

  /**
   * Obtiene el número de elementos en la colección.
   * @returns El número de elementos en la colección.
   */
  getNumberOfItems(): number {
    return this._items.length;
  }

  /**
   * Método abstracto que debe ser implementado por subclases para realizar búsquedas dentro de la colección.
   * @param query - La consulta utilizada para la búsqueda.
   */
  abstract search(query: T): void;
}
