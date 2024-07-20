// ! DSA in JavaScript day 5

// Todo: Topic Array

// * Q5, Search Insert Position
// * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// * You must write an algorithm with O(log n) runtime complexity

// * Input: nums = [1,3,5,6], target = 5 , Output: 2
// * Input: nums = [1,3,5,6], target = 2 , Output: 1

// * First Try (Pass all Test Case (but Wrong Answer))
function searchInsert(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
}

console.log(searchInsert([1, 3, 5, 6], 5));

// * Write Answer Using Binary Search (I don't Study Yet! 🤡)
function searchInsert1(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

console.log(searchInsert1([1, 3, 5, 6], 5));
