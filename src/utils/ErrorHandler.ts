// Error handler for ReadFileError
class ReadFileError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Read File Error";
  }
}

// Error handler for WriteFileError
class WriteFileError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Write File Error";
  }
}

export { WriteFileError, ReadFileError };
