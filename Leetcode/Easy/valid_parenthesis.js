var isValid = function (s) {
  
  const leftBrackets = ["(", "{", "["];
  const matchBrackets = { ")": "(", "}": "{", "]": "[" };
  const testStack = [];
  
  if (s.length % 2 !== 0) return false;
  
  for (const char of s) {
    if (leftBrackets.includes(char)) {
      testStack.push(char);
    } else if (testStack[testStack.length - 1] === matchBrackets[char]) {
      testStack.pop();
    } else return false;
  }
  
  if (testStack.length === 0) return true;
  else return false;
};

// Did very well on the speedtest with this one 56ms and 98%
// Clear out all strings of uneven length to reduce number to go through and make alg faster
// Loop through the string and add all left brackets to the stack
// If a right bracket shows up check it against the last in the stack, if it matches remove it
// If it doesn't match the test should fail
// Return true if the stack is empty after the loop and false if it is not empty