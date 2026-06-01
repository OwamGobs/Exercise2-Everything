// Declare a function named "sum" that takes a single parameter named "number".
function sum(number) {
  // Reject non-integer values in the parameter immediately.
  if (number !== Math.floor(number)) {
    return "The value passed is not an integer";
  }

  // Initialize the running total.
  let totalNumbers = 0;

  // Add each number from 0 through "number" parameter into the total.
  for (let i = 0; i <= number; i++) {
    // Add the current number to the total.
    totalNumbers += i;
  }

  // Return the sum.
  return totalNumbers;
}

// Example - this will print an error message because 3.9 is not an integer.
console.log(sum(3.9));
// Example - this will print 10 because 0 + 1 + 2 + 3 + 4 = 10.
console.log(sum(4));

//Question 2

function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  console.log(result);
}
factorial(4);

//Question 3

function funkyMath(w , x, y, z) {
  if (arguments.length === 2) {
    return x - w;
  }
  
  if (arguments.length === 3) {
    return w + x + y;
  }

  if (arguments.length === 4) {
    let equation1 = w + x;
    let equation2 = y + z;
    return equation1 / equation2;
  }

  return "Invalid number of arguments";
}

console.log(funkyMath(5, 8 )); // Output: 3
console.log(funkyMath(1, 3, 5)); // Output: 9
console.log(funkyMath(4, 8, 12, 16)); // Output : 0.452

//Question 4

const numbers = [1, 2, 33, 45, 6, 44];
const oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);
        numbers.splice(i, 1); // remove odd number from original array
        i--; // adjust index after removal
    }
}

oddNumbers.sort((a, b) => a - b);

console.log("Original array:", numbers);
console.log("Odd numbers:", oddNumbers);

//Question 5

const me = {
       firstName: "Owam",
       lastName: "Gobinca",
       age: 19,
       favouriteColour: "Green",
       dreamCar: "Ford Raptor"
  }; 

//Question 6

// Add a new property
me.favouriteFood = "Pizza";

//Question 7

// Delete the age property
delete me.age;
console.log(me);