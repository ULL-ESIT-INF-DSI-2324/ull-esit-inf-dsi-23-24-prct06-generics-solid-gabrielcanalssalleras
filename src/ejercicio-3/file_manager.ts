import { FileService } from "./file_service";

export class FileManager {
 constructor(
  private readonly fileOperation: FileService
 ) {}

 public readFile(filePath: string): string {
  return this.fileOperation.read(filePath);
 }

 public writeFile(filePath: string, data: string): void {
  this.fileOperation.write(filePath, data);
 }
} 
