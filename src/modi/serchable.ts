/**
 * Esta interfaz define una interfaz de búsqueda genérica.
 *
 * @typeparam T El tipo de los elementos de la búsqueda.
 */
export interface Searchable<T> {
  search(query: T): void;
}