// ! DSA in JavaScript day 5

// Todo: Topic Array

// * Q4 Remove Element
// * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// * Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// * Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// * Return k.

// * input: --> [3,2,2,3], val = 3, output --> 2

// Todo: My Answer (Pass Just One Case)
function removeElement(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, i);
    }
  }
  return nums.length;
}
const nums1 = [3, 2, 2, 3];
const val1 = 3;
console.log(removeElement(nums1, val1));

// Todo: Second Try (Accepted)
function removeElement(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

const nums = [3, 2, 2, 3];
const val = 3;
console.log(removeElement(nums, val));
