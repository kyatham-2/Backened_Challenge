import path from "path";

export class StorageService {
  getFilePath(fileName: string) {
    return path.join(__dirname, "../../uploads", fileName);
  }
}

export const storageService = new StorageService();
