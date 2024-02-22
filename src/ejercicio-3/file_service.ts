export interface FileService {
  read(filePath: string): string;
  write(filePath: string, data: string): void;
}
