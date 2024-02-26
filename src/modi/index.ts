import { NumericSearchableCollection } from "./numeric_serchable_collection";
import { StringSearchableCollection } from "./string_serchable_collection";

const numericCollectionInstance = new NumericSearchableCollection();
numericCollectionInstance.addItem(1);
numericCollectionInstance.addItem(2);
numericCollectionInstance.addItem(1);

const stringCollectionInstance = new StringSearchableCollection();
stringCollectionInstance.addItem("apple");
stringCollectionInstance.addItem("banana");
stringCollectionInstance.addItem("pineapple");

numericCollectionInstance.search(1);
stringCollectionInstance.search("apple");
stringCollectionInstance.search("apple");


numericCollectionInstance.search(37);
stringCollectionInstance.search("orange");