// ! Day 4 of learning DSA in

//  Todo: Array Data Starcher

// * Q1, Second Largest Number
// * Given an array Arr of size of N  Print the Second largest Number

// ? Example
// * Input --> [3,5,6,7,89,33,143]; ---> output: 89

// * The Time Complexity of This Function is O(n log n) (bad Time Time complexity)
function FindSecond(array) {
  let newArray = Array.from(new Set(array));
  newArray.sort((a, b) => {
    return b - a;
  });
  if (newArray.length > 2) {
    return newArray[1];
  } else {
    return -1;
  }
}
const arr = [3, 5, 6, 7, 89, 33, 143];
console.log(FindSecond(arr));

// * The Time Complexity of This Function is O(n) (Liner Search) (bad Time Time complexity)
function Optimise(array) {
  let largest = Number.NEGATIVE_INFINITY;
  let SLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      SLargest = largest;
      largest = array[i];
    } else if (array[i] != largest && array[i] > SLargest) {
      SLargest = array[i];
    }
  }
  return SLargest;
}
console.log(Optimise(arr));

console.clear();

// * Q2, Rotate Array by K
// * Given an integer array num rotate the array to the right by K steps

// ? Example
// *  Input  -->  [1,2,3,4,5,6,7], k = 3,  Output --> [5,6,7,1,2,3,4]
// * [1,2,3,4,5,6,7] -> [7,1,2,3,4,5,6] -> [6,7,1,2,3,4,5] -> [5,6,7,1,2,3,4]

// Todo: My Solution (Wrong)
function rotateArray(arr, k) {
  if (k > arr.length) {
    return -1;
  } else {
    for (let i = 0; i < k; i++) {
      var Array = [];
      Array.unshift(arr[arr.length - 1], ...arr);
      arr.pop();
    }
    return Array;
  }
}

// *
function rotateArray1(arr, k) {
  let size = arr.length;
  if (size > k) {
    k = k % size;
  }
  const rotated = arr.splice(size - k, size);
  arr.unshift(...rotated);
  return arr;
}
