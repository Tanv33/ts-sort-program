import path from "path";
import FileFunctions from "./utils/FileFunctions";
import SortBy from "./helpers/SortBy";
import { ReadFileError, WriteFileError } from "./utils/ErrorHandler";

function main(): void {
  // Read File path
  const inputFilePath: string = path.join(__dirname, "input.txt");
  const outputFilePath: string = path.join(__dirname, "output.txt");

  try {
    // Reading input.txt
    const fileContent: string = FileFunctions.readFile(inputFilePath);
    // Split with ", "
    const numberStrings: string[] = fileContent.split(", ");

    // Convert all string to number & checking the type of num
    const numbers: number[] = numberStrings.map((str) => {
      const num = Number(str);
      return isNaN(num) ? 0 : num;
    });

    // passing the number array to Descending method
    const sortedNumbers: number[] = SortBy.Descending(numbers);

    // now writing it properly with ", "
    const sortedString: string = sortedNumbers.join(", ");
    FileFunctions.writeFile(outputFilePath, sortedString);
    // At last console to confirm all went successfully
    console.log("Sorting and writing complete.");
  } catch (error) {
    if (error instanceof ReadFileError || error instanceof WriteFileError) {
      console.error(`${error.name}: ${error.message}`);
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
}

main();
