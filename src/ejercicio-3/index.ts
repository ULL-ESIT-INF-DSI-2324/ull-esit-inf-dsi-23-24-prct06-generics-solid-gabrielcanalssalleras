import { FileSystemProvider } from "./file_system_provider";
import { FileManager } from "./file_manager";
import * as fs from "fs";

// Client code
const fileOperation = new FileSystemProvider(fs);
const fileManager = new FileManager('example.txt', fileOperation);

// Reading content
const currentContent = fileManager.readFile();
console.log('Current content:', currentContent);

// Writing content
const newData = 'This is new content to be written into the file.';
fileManager.writeFile(newData);

// Updating content
const updatedContent = fileManager.readFile();
console.log('Updated content:', updatedContent);
