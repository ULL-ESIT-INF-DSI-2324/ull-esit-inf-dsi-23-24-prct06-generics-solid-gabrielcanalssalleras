# PRÁCTICA 6: CLASES E INTERFACES GENÉRICAS. PRINCIPIOS SOLID.
## DESARROLLO DE SISTEMAS INFORMÁTICOS
### Gabriel Ángel Canals Salleras
### alu0101460468
---
## Objetivo de la práctica

En el transcurso de esta práctica seguiremos trabajando con TypeScript, abordando una variedad de ejercicios diseñados para explorar a fondo los conceptos fundamentales de clases e interfaces genéricas, así como los principios SOLID. A través de estos, ampliaremos nuestra comprensión y destreza en el manejo de estas estructuras de datos esenciales, fortaleciendo así nuestras habilidades en el desarrollo con TypeScript.

## Tareas previas
Tras aceptar debidamente la tarea en GitHub Classroom, habilitamos GitHub Pages para la elaboración de este informe. Posteriormente, clonamos el repositorio en nuestro equipo local y creamos una rama `code` para el desarrollo de la práctica.

Seguidamente, creamos la estructura de trabajo adecuada para los proyectos escrito en TypeScript, concretamente, un directorio `src` para los ficheros fuente y un directorio `dist` para los ficheros compilados. 

Adicionalmente complementamos nuestro proyecto con Typedoc para la documentación, Mocha y Chai para realizar las pruebas unitarias del **TDD** e Istambul y Coveralls para comprobar el cubrimiento del código.

## Ejercicios
En esta sección se detallan los ejercicios propuestos y su resolución.

### Ejercicio 1

Para gestionar la mudanza se procede a crear la clase `Mudanza` y `Caja`, así como la interfaz `Enser`. Adicionalmente se crean las subclases `Ropa`, `Mueble`, `Menaje` y `Electrodomestico` que implementan los atributos de la interfaz `Enser`. 

1. `Mudanza` utilizará como tipo genérico un array de Cajas para gestionar los contenidos y desde esta clase:
   1. Se pueden añadir enseres a la mudanza. Si no cabe en ninguna de las cajas se añade una nueva:
   
   ```ts
    public agregarEnser(caja: Caja<T>, enser: T): void {
      this._cajas.forEach(caja => {
        if (caja.cabeEnser(enser)) caja.agregarEnser(enser);
      });
      this._cajas.push(new Caja(enser.peso, [enser]));
    }
   ```
   2. Se puede comprobar el peso total.
   3. Se pueden buscar objetos en el sistema de mudanza por su nombre.
2. `Caja` utilizará como tipo genérico un array de Enseres para gestionar el contenido de cada Caja:
   1. Se podrá comprobar y cambiar el peso máximo de la caja.
   2. Se pueden añadir enseres a la caja.
   3. Se puede comprobar si un nuevo Enser cabe en la caja.
3. Cada clase de tipos de Enser dispondrá de:
   1. Nombre
   2. Cantidad
   3. Peso
   4. Descripción

El desarrollo del código se ha acogido a los principios SOLID y se ha comprobado que los cumplen correctamente.

Este código se puede encontrar en el directorio `src/ejercicio-1`. Cada clase e interfaz se encuentra en un fichero separado.

Las **pruebas** que se han realizado mediante el **Desarrollo Dirigido por Pruebas** son las siguientes:

- Creación de una mudanza.
- Creación de cajas.
- Creación de enseres.
- Añadir enseres a una caja.
- En caso de que no quepa un enser en una caja, salta un error.
- Comprobar si un enser cabe en una caja.
- Comprobar el peso total de una caja.
- Añadir cajas a una mudanza.
- Añadir enseres a una mudanza.
- Comprobar el peso total de una mudanza.
- Buscar un enser en una mudanza.
- En caso de no encontrar un enser en una mudanza, devuelve un mensaje explicativo.
- Modificar y comprobar el peso máximo de una caja.

Las pruebas unitarias para este ejercicio se encuentran en el fichero `tests/ejercicio-1/ejercicio-1.spec.ts`.

### Ejercicio 2

Para este ejercicio desarrollamos una interfaz base para las Facturas, `Factura` que incluirá:

- `extension`: Extensión del fichero.
- `nombre`: Nombre del formato.
- `tipoFichero`: Tipo de fichero.
- `numeroFactura`: Número de la factura.
- `fecha`: Fecha de la factura.
- `concepto`: Concepto de la factura.
- `cliente`: Cliente de la factura.
- `importe`: Importe de la factura.
- Los getters de cada atributo.

Desarrollamos dos clases de ejemplo `FacturaHTML` y `FacturaPDF` que implementan la interfaz `Factura`.

Además creamos la clase `GestorFacturación` cuyo principal atributo es un array de `Factura`. Desde esta clase se pueden realizar las siguientes operaciones:

- Añadir una factura al gestor.
- Eliminar una factura del gestor.
- Comprobar la facturacion total.

Con esta estructura podemos crear nuevas clases de factura que implementen la interfaz `Factura` sin modificar la clase `GestorFacturación`. Este principio se conoce como **Principio de Abierto-Cerrado**.

Este código se puede encontrar en el directorio `src/ejercicio-2`. Cada clase e interfaz se encuentra en un fichero separado.

Las **pruebas** que se han realizado mediante el **Desarrollo Dirigido por Pruebas** son las siguientes:

- Creación de una factura HTML.
- Obtención de los atributos de la factura HTML.
- Creación de una factura PDF.
- Obtención de los atributos de la factura PDF.
- Creación de un gestor de facturación sin facturas.
- Creación de un gestor de facturación con facturas.
- Añadir una factura al gestor.
- Eliminar una factura del gestor.
- Si no se encuentra una factura en el gestor, no se elimina.
- Comprobar la facturación total.
- Creación de un nuevo formato de factura sin modificar el código existente.

Las pruebas unitarias para este ejercicio se encuentran en el fichero `tests/ejercicio-2/ejercicio-2.spec.ts`.

### Ejercicio 3

Con el código dado se procede a comprobar si cumple los principios SOLID:

S – **Principio de responsabilidad única**: La clase FileManager cumple con este principio. Su única responsabilidad es gestionar la lectura y escritura de archivos.

O – **Principio abierto-cerrado**: El código no está completamente abierto para la extensión. Si se necesitan agregar nuevas funcionalidades se deberá modificar la clase FileManager.
 
Para solucionar esta situación, procedemos a **abstraer** la funcionalidad de lectura y escritura de archivos en una interfaz `FileService` y una clase `FileSystemProvider` que implementa dicha interfaz. De esta manera, si se necesitan agregar nuevas funcionalidades, se pueden crear nuevas clases que implementen la interfaz `FileService` sin modificar la clase `FileManager`, que es la clase que se utilizar a nivel de aplicación.

L – **Principio de sustitución de Liskov**: Al no haber subclases, este principio no es aplicable en el código. 

I – **Principio de segregación de la interfaz**: La interfaz actual de FileManager es relativamente simple y parece suficiente. Si se agregaran más operaciones de gestión de archivos se debe considerar crear interfaces o métodos separados para cada funcionalidad.

D – **Principio de inversión de dependencias**: De igual manera que con el Principio abierto-cerrado, la clase FileManager depende directamente del módulo fs para realizar operaciones de archivo, por lo que deberiamos abstraer el módulo fs para que la clase FileManager no dependa directamente de él.

Con la solución propuesto, ahora es posible crear nuevas clases que implementen la interfaz `FileService` sin modificar la clase `FileManager`. Además, se ha abstraído el módulo fs en la clase `FileSystemProvider` para que la clase `FileManager` no dependa directamente de él.

Este código se puede encontrar en el directorio `src/ejercicio-3`. Cada clase e interfaz se encuentra en un fichero separado.

Las **pruebas** que se han realizado mediante el **Desarrollo Dirigido por Pruebas** son las siguientes:

- Creación del proveedor de sistema de archivos.
- Creación del gestor de archivos.
- Lectura de un archivo.
- Escritura de un archivo.
- Error al leer un archivo que no existe.
- Error al escribir un archivo que no existe.

Las pruebas unitarias para este ejercicio se encuentran en el fichero `tests/ejercicio-3/ejercicio-3.spec.ts`.

### Ejercicio 4

Comprobemos si el código dado cumple con los principios SOLID:

S – **Principio de responsabilidad única**: Cada clase realiza una única tarea, por lo que cumple con este principio. La iterfaz `PrintableScannable` también cumple con este principio.

O – **Principio abierto-cerrado**: El código cumple con este principio en cierto grado. La interfaz `PrintableScannable` está abierta a la extensión (se pueden crear nuevas clases que la implementen), pero no está completamente cerrada a la modificación. Si se requieren nuevas funcionalidades de impresión o escaneo, la interfaz tendría que modificarse.

L – **Principio de sustitución de Liskov**: El código cumple con este principio. Cualquier clase que implemente la interfaz PrintableScannable puede ser utilizada en lugar de otra clase que también implemente la misma interfaz, sin generar errores o un comportamiento inesperado.

I – **Principio de segregación de la interfaz**: Se viola este principio. La interfaz `PrintableScannable` podria ser dividida en dos interfaces separadas, una para la impresión y otra para el escaneo.

Esto se soluciona creando dos interfaces separadas, `Printable` y `Scannable`. De esta manera, las clases que necesiten implementar solo una de las dos funcionalidades pueden implementar la interfaz correspondiente:

```ts
interface Printable {
  print(): void;
}

interface Scannable {
  scan(): void;
}

class Printer implements Printable {}
class Scanner implements Scannable {}
class PrinterScanner implements Printable, Scannable {}
```

D – **Principio de inversión de dependencias**: Se cumple con este principio. La clase `Printer` y `Scanner` dependen de la interfaz `PrintableScannable` y no de las clases concretas que la implementan.

Este código se puede encontrar en el fichero `src/ejercicio-4/ejercicio-4.ts`.

Las **pruebas** que se han realizado mediante el **Desarrollo Dirigido por Pruebas** son las siguientes:

- Creación de una impresora.
- Creación de un escáner.
- Creación de una impresora-escáner.
- Impresión de un documento mediante la impresora.
- Escaneo de un documento mediante el escáner.
- Impresión de un documento mediante la impresora-escáner.
- Escaneo de un documento mediante la impresora-escáner.

Las pruebas unitarias para este ejercicio se encuentran en el fichero `tests/ejercicio-4/ejercicio-4.spec.ts`.

### Ejercicio 5

Comprobemos si el código dado cumple con los principios SOLID:

S – **Principio de responsabilidad única**: La estructura del código se adhiere a este principio. Cada clase tiene una única responsabilidad clara y bien definida.

O – **Principio abierto-cerrado**: Podría decirse que el código cumple con este principio, pero con mejoras. La clase `Notifier` está abierta a la extensión (se pueden crear nuevas clases que la implementen), pero no está completamente cerrada a la modificación. Las clases existentes tendrían que modificarse si se requieren nuevas funcionalidades de notificación.

L – **Principio de sustitución de Liskov**: El código cumple con este principio. Las clases pueden ser inercambiables entre sí con `Notifier` sin generar errores o un comportamiento inesperado.

I – **Principio de segregación de la interfaz**: No es aplicable en este código. La interfaz `Notificable` es relativamente simple y parece suficiente.

D – **Principio de inversión de dependencias**: Se cumple con este principio parcialmente. La clase `Notifier` depende de las abstracciones en lugar de implementaciones concretas, pero las clases concretas dependen de la clase `Notifier`.

Como mejora, abstractamos la funcionalidad del servicio de notificación en una interfaz `NotificationService` y la clase `Notifier` depende de esta interfaz en lugar de una implementación concreta. De esta manera, si se necesitan agregar nuevas funcionalidades de notificación, se pueden crear nuevas clases que implementen la interfaz `NotificationService` sin modificar la clase `Notifier`.

```ts
interface NotificationService {
  notify(message: string): void;
}

class Notifier {
  constructor(private notificationService: NotificationService) {}

  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}
```

Este código se puede encontrar en el fichero `src/ejercicio-5/ejercicio-5.ts`.

Las **pruebas** que se han realizado mediante el **Desarrollo Dirigido por Pruebas** son las siguientes:

- Creación de un servicio de notificación.
- Creación de un notificador por email.
- Creación de un notificador por SMS.
- Se envía una notificación por email.
- Se envía una notificación por SMS.
- Se envía una notificación a través del servicio de notificación.

Las pruebas unitarias para este ejercicio se encuentran en el fichero `tests/ejercicio-5/ejercicio-5.spec.ts`.

## Modificación

El ejercicio de modificación pide:

1. Crear la interfaz `Collectable` que incluirá los métodos `addItem`, `getItem`, `removeItem` y `getNumberOfItems`.
2. Crear la interfaz `Searchable` que incluirá el método `search`.
3. Crear la clase abstracta `SearchableCollection` que implementará las interfaces `Collectable` y `Searchable`. Esta clase incluirá un array interno para almacenar elementos en la colección y los métodos necesarios para manipular la colección.
4. Crear la clase `NumericSearchableCollection` que extenderá de `SearchableCollection` y que implementará el método `search` para buscar ocurrencias de un número en la colección.
5. Crear la clase `StringSearchableCollection` que extenderá de `SearchableCollection` y que implementará el método `search` para buscar ocurrencias de una cadena en la colección.

La búsqueda de cadenas se realizará mediane expresiones regulares:

```ts
const regExp = new RegExp(query);
this.items.forEach((item) => {
  if (item.match(regExp)) occurrences.push(item)
});
```

Este código se puede encontrar en el directorio `src/modi`. Cada clase e interfaz se encuentra en un fichero separado.

Las **pruebas** que se han realizado mediante el **Desarrollo Dirigido por Pruebas** son las siguientes:



## Conclusión
Los ejercicios elaborados han expandido nuestro entendimiento sobre las clases e interfaces genéricas, así como de los principios SOLID. Cada ejercicio abordado no solo ha desafiado nuestra destreza técnica, sino que también ha requerido una comprensión sólida de conceptos fundamentales. La ejecución exitosa de estos ejercicios refleja la capacidad de aplicar conocimientos teóricos y la habilidad para resolver problemas prácticos. Esta experiencia ha fortalecido nuestra competencia en el uso efectivo de TypeScript, contribuyendo así al desarrollo integral de nuestras habilidades de programación.