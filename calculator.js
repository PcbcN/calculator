const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
  let result = 0;
    for (const item of arr){
      result += item;
    }
    return result;
};

const multiply = function(arr) {
  let result = 1;
    for (const item of arr){
      result *= item;
    }
    return result;

};

const power = function(a,b) {
  let result = Math.pow(a,b);
  return result;
	
};

const factorial = function(a) {
  let result = 1;
  if (a == 0 || a == 1) {return result;
  } else {
    for (var i = a; i >= 1; i--){
      result = result * i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
