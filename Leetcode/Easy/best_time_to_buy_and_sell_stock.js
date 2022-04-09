/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    
  let smallest = 9999999;
  let maxProfit = 0;
  
  for (const price of prices) {
      smallest = Math.min(smallest, price);
      
      if (price - smallest > maxProfit) {
          maxProfit = price - smallest;
      };
  };
  
  return maxProfit;
  
};