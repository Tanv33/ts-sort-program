class SortBy {
  static Descending(arr: number[]): number[] {
    // Using array method .sort() to sort array to descending order
    return arr.slice().sort((a, b) => b - a); // Time complexity of O(n log n)
  }
}

export default SortBy;
