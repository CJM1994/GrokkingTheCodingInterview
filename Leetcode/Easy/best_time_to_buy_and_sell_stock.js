/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    
  let smallest = prices[0];
  let maxProfit = 0;
  
  for (const [index, price] of prices.entries()) {
      smallest = Math.min(smallest, price);
      
      if (price - smallest > maxProfit) {
          maxProfit = price - smallest;
      };
  };
  
  return maxProfit;
  
};

// Managed to solve with O(n) time complexity
// Can solve with no review
// Only one pass needed, loop through array and check if max profit for the current item in the array
// is the greatest encountered so far, need two vars (smallestPrice and maxProfit)