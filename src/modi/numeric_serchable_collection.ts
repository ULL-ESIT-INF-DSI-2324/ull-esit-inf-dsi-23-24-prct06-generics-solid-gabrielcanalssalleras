import { SearchableCollection } from "./serchable_collection";

/**
 * Clase que representa una colección numérica con capacidades de búsqueda.
 *
 * @extends SearchableCollection<number>
 */
export class NumericSearchableCollection extends SearchableCollection<number> {

  /**
   * Busca las ocurrencias de un número en la colección.
   *
   * @param query - Número a buscar en la colección.
   * @returns Un array con los índices de las ocurrencias del número.
   */
  search(query: number): number[] {
    const occurrences: number[] = [];

    this.items.forEach((item, index) => {
      if (item === query) occurrences.push(index);
    });

    console.log(`Buscando: ${query}`);
    if (occurrences.length !== 0) console.log(`Encontrado en los índices: ${occurrences}`);
    else console.log(`Elemento no encontrado`);
    return occurrences;
  }
}

