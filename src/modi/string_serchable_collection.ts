import { SearchableCollection } from "./serchable_collection";

/**
 * Clase que representa una colección de cadenas con capacidades de búsqueda.
 *
 * @extends SearchableCollection<string>
 */
export class StringSearchableCollection extends SearchableCollection<string> {

  /**
   * Busca las ocurrencias de una cadena en la colección.
   *
   * @param query - Cadena a buscar en la colección.
   * @returns Un array con las cadenas que coinciden con la búsqueda.
   */
  search(query: string): string[] {
    const occurrences: string[] = [];

    const regExp = new RegExp(query);
    this.items.forEach((item) => {
      if (item.match(regExp)) occurrences.push(item)
    });

    console.log(`Buscando: ${query}`);
    if (occurrences.length !== 0) console.log(`Encontrada en las cadenas: ${occurrences}`);
    else console.log(`Subcadena no encontrada`);
    return occurrences;
  }
}

