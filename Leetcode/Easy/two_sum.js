/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    
  let storage = {};
      
  for (let [index, num] of nums.entries()) {        
      if (storage[num] !== undefined) {
          return [storage[num], index];
      };
      storage[target - num] = index;
  };
  
};

// O(n) complexity
// Create a storage table with the second number we need to make the target as value and index as key
// Return both indexes when the second number is found
// Be careful to check for answer before adding values or it will trigger falsly when the num is equal to target / 2