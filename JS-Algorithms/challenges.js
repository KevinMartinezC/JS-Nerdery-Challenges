
// Constants
const ONE_BIGINT = 1n; // Initial value for factorial calculation as BigInt literal
const STARTING_SUM = 0; // Initial value for summing digits
const START_FACTORIAL_LOOP_VALUE = 2
const ZERO_BIGINT = 0n
const SECONDS_IN_HOUR = 3600; // Number of seconds in an hour
const SECONDS_IN_MINUTE = 60; // Number of seconds in a minute
const STRING_SPLIT_DELIMITER = "";// General delimiter for splitting strings
const MINIMUM_INDEX = 1; // Fibonacci starts at index 1
const FIB_START1 = 1; // First Fibonacci number
const FIB_START2 = 1; // Second Fibonacci number

/* *****
Challenge 1

"Readable Time"

The function "readableTime" accepts a positive number as argument,
you should be able to modify the function to return the time from seconds
into a human readable format.

Example:

Invoking "readableTime(3690)" should return "01:01:30" (HH:MM:SS)
***** */

const formatTimeValue = (value) => String(value).padStart(2,"0");

const readableTime = (seconds) => {
  // YOUR CODE HERE...

  const hours = Math.floor(seconds / SECONDS_IN_HOUR); // 1 hour = 3600 seconds
  const minutes = Math.floor((seconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);  // Remaining seconds converted to minutes
  const remainingSecods = seconds % SECONDS_IN_MINUTE; // Seconds left after extracting hours and minutes

  // Return the formatted time as "HH:MM:SS"
  return `${formatTimeValue(hours)}:${formatTimeValue(minutes)}:${formatTimeValue(remainingSecods)}`;
};

readableTime(458);
readableTime(3690);
readableTime(7293);
readableTime(32420);

/* *****
Challenge 2

"Circular Array"

Given the following array "COUNTRY_NAMES", modify the function "circularArray"
to return an array that meets the following criteria:

- The index number passed to the function should be the first element in the resulting array
- The resulting array must have the same length as the initial array
- The value of the argument "index" will always be a positive number

Example:

Invoking "circularArray(2)" should return "["Island", "Japan", "Israel", "Germany", "Norway"]"
***** */

const COUNTRY_NAMES = ["Germany", "Norway", "Island", "Japan", "Israel"];

const circularArray = (index) => {
  // Ensure the index is within the bounds of the array length
  const normalizedIndex = index % COUNTRY_NAMES.length;

  return COUNTRY_NAMES
    .slice(normalizedIndex)
    .concat(COUNTRY_NAMES.slice(0, normalizedIndex));
};

circularArray(2);
circularArray(3);
circularArray(5);
circularArray(9);

/* *****
Challenge 3

"Own Powers"

The function "ownPower" accepts two arguments. "number" and "lastDigits".

The "number" indicates how long is the series of numbers you are going to work with, your
job is to multiply each of those numbers by their own powers and after that sum all the results.

"lastDigits" is the length of the number that your function should return, as a string!.
See example below.

Example:

Invoking "ownPower(10, 3)" should return "317"
because 1^1 + 2^2 + 3^3 + 4^4 + 5^5 + 6^6 + 7^7 + 8^8 + 9^9 + 10^10 = 10405071317
The last 3 digits for the sum of powers from 1 to 10 is "317"
***** */

const ownPower = (number, lastDigits) => {
  let totalSum = ZERO_BIGINT;

  for(let i = 1; i <= number; i++) {
    totalSum += BigInt(i) **  BigInt(i);
  }

  return totalSum.toString().slice(-lastDigits);
};
//totalSum.toString().slice(-lastDigits).padStart(lastDigits, '0')
ownPower(10, 3);
ownPower(12, 7);
ownPower(21, 12);

/* *****
Challenge 4

"Sum of factorial digits"

A factorial (x!) means x! * (x - 1)... * 3 * 2 * 1.
For example: 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800

Modify the function "digitSum" to return a number that
equals to the sum of the digits in the result of 10!

Example:

Invoking "digitSum(10)" should return "27".
Since 10! === 3628800 and you sum 3 + 6 + 2 + 8 + 8 + 0 + 0
***** */

const factorial = (num) => {
  let result = ONE_BIGINT;
  for (let i = START_FACTORIAL_LOOP_VALUE; i <= num; i++){
    result *= BigInt(i);
  }
  return result
}

const digitSum = (n) => {
  return factorial(n)
    .toString()
    .split(STRING_SPLIT_DELIMITER)
    .reduce((sum, digit) => sum + Number(digit), STARTING_SUM);
};

digitSum(10);
digitSum(42);
digitSum(71);
digitSum(89);

/* *****
Challenge 5

"N-Digit Fibonacci Number"

Modify the function "fibIndex" to return the index of the first Fibonacci
number whose digits-length equals the number passed in to the function.

Example:

Invoking "fibIndex(3)" should return "12".
Because the 12th index in the Fibonacci sequence is 144, and 144 has three digits
***** */

const fibIndex = (n) => {
   let prev = FIB_START1; 
   let current = FIB_START2; 
   let index = MINIMUM_INDEX + 1;

    while (current.toString().length < n) {
     const next = prev + current;
     prev = current;
     current = next; 
     index++; 
   }
 
   return index;
};

fibIndex(3);
fibIndex(5);
fibIndex(12);
fibIndex(15);

exports.readableTime = readableTime;
exports.circularArray = circularArray;
exports.ownPower = ownPower;
exports.digitSum = digitSum;
exports.fibIndex = fibIndex;
