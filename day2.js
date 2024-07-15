// ! Day 2 of learning DSA in Javascript

// Todo: Topic 1 (Big O Notation)

// Todo: O(n) -> ("signifies that the execution time of the algorithm grows linearly in proportion to the size of the input data(n) ")  (Linear Search) (OK Time Complexity)

const groceryList = ["Milk", "Eggs", "Bread", "Butter", "Cheese", "Tomatoes"];

function findGrocery(item) {
  for (i = 0; i < groceryList.length; i++) {
    if (groceryList[i] === item) {
      return `found ${item}`;
    }
  }
}
console.log(findGrocery("Butter"));

// Todo: O(1) -> ("aka constant time signifies that the execution time of an algorithm remains constant regardless of the input size") (Good Time Complexity)

const numberList = [1, 2, 3, 4, 5, 6, 7];

function findNumber(array, index) {
  return array[index];
}

console.log(findNumber(numberList, 6));

// Todo: O(n^2) -> (" O(n^2) Indicates that the algorithm's execution time grows quadratically with the size of the input data (represent by n") (Quadratic) (Bad Time Complexity)

function findPairs(array) {
  for (i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
      console.log(`Pair ${array[i]}  ${array[j]}`);
    }
  }
}
const numbers = [1, 2, 3, 4, 5];
console.log(findPairs(numbers));

// Todo: O(log n) -> ("Time Complexity refers to an algorithm's runtime that grows algorithmically with the size of the input represented by n in simple terms as the input size increase the time it take for the algorithm to run increases slowly") (Binary Search) (Good Time Complexity)

// Todo: O(n log n) -> ("We use in Sorting") (OK Time Complexity)

// Todo: O(2n) -> ("Exponential Time Complexity (use in recursion)") (Bad Time Complexity)
// Todo: O(3n) -> ("Exponential Time Complexity (use in recursion)") (Bad Time Complexity)
// Todo: O(4n) -> ("Exponential Time Complexity (use in recursion)") (Bad Time Complexity)

// Todo: O(n!) ->  ("Worst Time Complexity")
