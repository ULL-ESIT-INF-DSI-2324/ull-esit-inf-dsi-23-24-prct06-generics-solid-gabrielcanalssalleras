import { FileService } from "./file_service";

export class FileManager {
 constructor(
  private readonly filePath: string,
  private readonly fileOperation: FileService
 ) {}

 public readFile(): string {
  return this.fileOperation.read(this.filePath);
 }

 public writeFile(data: string): void {
  this.fileOperation.write(this.filePath, data);
 }
} 
