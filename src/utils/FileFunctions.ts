import fs from "fs";
import { ReadFileError, WriteFileError } from "./ErrorHandler";

class FileFunctions {
  // readfile from the disk
  static readFile(filePath: string): string {
    try {
      return fs.readFileSync(filePath, "utf-8");
    } catch (error) {
      throw new ReadFileError(
        `Error reading file: ${(error as Error).message}`
      );
    }
  }
  // writefile to the disk
  static writeFile(filePath: string, content: string): void {
    try {
      fs.writeFileSync(filePath, content);
    } catch (error) {
      throw new WriteFileError(
        `Error writing file: ${(error as Error).message}`
      );
    }
  }
}

export default FileFunctions;
