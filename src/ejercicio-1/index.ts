import { Enser } from "./enser";
import { Mudanza } from "./mudanza";
import { Caja } from "./caja";
import { Ropa } from "./ropa";
import { Menaje } from "./menaje";
import { Mueble } from "./mueble";
import { Electrodomestico } from "./electrodomestico";

const mudanza = new Mudanza<Enser>();

const caja1 = new Caja<Enser>(100);
caja1.agregarEnser(new Ropa("Abrigo", "Ropa de invierno", 10, 1));
caja1.agregarEnser(new Ropa("Bañador", "Ropa de verano", 5, 1));
caja1.agregarEnser(new Menaje("Vajilla", "Platos y vasos", 30, 1));
caja1.agregarEnser(new Mueble("Lámpara", "Mueble de comedor", 50, 1));
mudanza.agregarCaja(caja1);

const caja2 = new Caja<Enser>(200);
caja2.agregarEnser(new Electrodomestico("Lavadora", "Televisor", 150, 1));
caja2.agregarEnser(new Electrodomestico("Microondas", "Televisor", 20, 1));
mudanza.agregarCaja(caja2);

console.log(mudanza.calcularPesoTotal());
console.log(mudanza.buscarEnser("Lámpara"));
