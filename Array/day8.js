// ! DSA in JavaScript day 5

// Todo: Topic Array

// * Q6, Plus One

// * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's. Increment the large integer by one and return the resulting array of digits.

// * Input: digits = [1,2,3], [4,3,2,1], [9]
// * Output: [1,2,4]
// * Explanation: The array represents the integer 123.
// * Incrementing by one gives 123 + 1 = 124.
// * Thus, the result should be [1,2,4].

// Todo: My Answer (Wrong Answer)
function plusOne1(integer) {
  if (integer.length - 1 !== 9) {
    let num = "";
    for (let i = 0; i < integer.length; i++) {
      num += integer[i];
    }
    num = parseInt(num);
    return num + 1;
  }
}

console.log(plusOne1([9]));
console.clear();

function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
}
console.log(plusOne([1, 2, 3]));
