import { FileReader } from "./file_reader";
import { FileWriter } from "./file_writer";

// Client code
const filePath = "example.txt";
const fileWriter = new FileWriter(filePath);
fileWriter.write(filePath, "Hello, world!");

const fileReader = new FileReader(filePath);
console.log(fileReader.read(filePath));


