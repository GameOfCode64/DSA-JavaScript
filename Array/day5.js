// ! DSA in JavaScript day 5

// Todo: Topic Array

// * Q3, Remove the duplicate element from Sorted Array
// * Given an integer array nums sorted in non-decreasing order, remove
// * the duplicate in-place such that each unique element appears
// * only once the relative order of elements should ke kept
// * the same then return the number of unique elements in nums

// * input --> [1,1,2] --> output: 2
// * input --> [0,0,1,1,2,2,3,3,4] --> output: 5
// [0,0,1,1,2,2,3,3,4]
// ! :- My answer (Right Answer with Good Time Complexity)
function CheckUniqueElement(array) {
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[j] !== array[i]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
}

console.log(CheckUniqueElement([0, 0, 1, 1, 2, 2, 3, 3, 4]));

// ! :- My answer (Right Answer with Good Time Complexity)
function CheckUniqueElement(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
      array.splice(i + 1, 1);
      i--;
    }
  }
  return array.length;
}

console.log(CheckUniqueElement([0, 0, 1, 1, 2, 2, 3, 3, 4]));
