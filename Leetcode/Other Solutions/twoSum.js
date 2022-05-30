/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let startIndex = 1;
  for (const [numIndex, numValue] of nums.entries()) {
    for (let i = startIndex; i <= nums.length; i++) {
      if (numValue + nums[i] === target) {
        return [numIndex, i];
      }
    }
    startIndex++;
  }
};

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
