/**
 * Esta interfaz define una colección genérica que puede contener elementos de cualquier tipo.
 *
 * @typeparam T El tipo de los elementos de la colección.
 */
export interface Collectable<T> {
  /**
   * Agrega un elemento a la colección.
   *
   * @param item El elemento que se va a agregar.
   */
  addItem(item: T): void;

  /**
   * Obtiene el elemento en un índice específico de la colección.
   *
   * @param index El índice del elemento que se va a recuperar.
   * @returns El elemento en el índice especificado, o indefinido si el índice está fuera de los límites.
   */
  getItem(index: number): T | undefined;

  /**
   * Elimina un elemento de la colección.
   *
   * @param item El elemento que se va a eliminar.
   */
  removeItem(item: T): void;

  /**
   * Obtiene la cantidad de elementos en la colección.
   *
   * @returns La cantidad de elementos en la colección.
   */
  getNumberOfItems(): number;
}
