// ! Two Sum

function TwoSum(array, sum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        return [i, j];
      }
    }
  }
}

console.log(TwoSum([2, 7, 4, 8], 15));
