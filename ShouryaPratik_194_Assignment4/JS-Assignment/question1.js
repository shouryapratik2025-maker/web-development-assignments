// ============================================================
// Question 1: Digit Gatekeeper
// Count integers x where:
//   - L <= x <= R
//   - x is divisible by K
//   - sum of digits of x is a prime number
//   - x does not contain the digit 0
// ============================================================

// Step 1: Take inputs from user
var L = parseInt(prompt("Enter L:"));
var R = parseInt(prompt("Enter R:"));
var K = parseInt(prompt("Enter K:"));

// Step 2: Helper function - check if a number is prime
function isPrime(num) {
    // Numbers less than 2 are not prime
    if (num < 2) {
        return false;
    }
    // Check divisibility from 2 up to the number itself
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Step 3: Helper function - get sum of digits of a number
function digitSum(num) {
    var sum = 0;
    var str = num.toString(); // convert number to string to loop through digits
    for (var i = 0; i < str.length; i++) {
        sum = sum + parseInt(str[i]);
    }
    return sum;
}

// Step 4: Helper function - check if number contains digit 0
function hasZero(num) {
    var str = num.toString();
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "0") {
            return true;
        }
    }
    return false;
}

// Step 5: Count all valid numbers in the range
var count = 0;

for (var x = L; x <= R; x++) {
    // Check all four conditions
    if (x % K === 0) {                  // condition 1: divisible by K
        if (!hasZero(x)) {              // condition 2: no digit 0
            if (isPrime(digitSum(x))) { // condition 3: digit sum is prime
                count = count + 1;
            }
        }
    }
}

// Step 6: Show the result
alert(count);
