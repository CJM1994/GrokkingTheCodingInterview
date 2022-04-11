// Maximum Sum Subarray of Size K (easy)
// Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

// Example 1:

// Input: [2, 1, 5, 1, 3, 2], k=3
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].
// Example 2:
// Input: [2, 3, 4, 1, 5], k=2
// Output: 7
// Explanation: Subarray with maximum sum is [3, 4].

// Loop through each contiguous subarray
// Add sum and check against the maximum sum
// if sum is greater than maximum sum then store array in variable
// return the array with the maximum sum

const maximumSubarray = function (array, k) {
  let windowEnd = 0;
  let windowStart = 0;

  let maxSum = 0;
  let windowSum = 0;

  for (windowEnd; windowEnd < array.length; windowEnd++) {
    windowSum += array[windowEnd];

    if (windowEnd >= k - 1) {
      maxSum = Math.max(windowSum, maxSum);
      windowSum -= array[windowStart];
      windowStart++;
    }
  }

  return maxSum;
};

console.log(maximumSubarray([2, 1, 5, 1, 3, 2], 3));
