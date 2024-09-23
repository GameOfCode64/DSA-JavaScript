var findClosestNumber = function (nums) {
  let close = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < close) {
      close = nums[i];
    }
    return close;
  }
};

console.log(findClosestNumber([-4, -2, 1, 4, 8]));
