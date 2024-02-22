import { FileSystemProvider } from "./file_system_provider";
import { FileManager } from "./file_manager";
import * as fs from "fs";

// Client code
const fileOperation = new FileSystemProvider(fs);
const fileManager = new FileManager(fileOperation);

// Reading content
const currentContent = fileManager.readFile("example.txt");
console.log("Current content:", currentContent);

// Writing content
const newData = "This is new content to be written into the file.";
fileManager.writeFile("example.txt", newData);

// Updating content
const updatedContent = fileManager.readFile("example.txt");
console.log("Updated content:", updatedContent);
