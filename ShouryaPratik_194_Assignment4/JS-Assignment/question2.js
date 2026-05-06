// ============================================================
// Question 2: Roll-Seed Lock
// Start with N, repeat 3 times:
//   - if current is even:  current = current / 2 + seed
//   - if current is odd:   current = current * 3 - seed
// After 3 steps, print YES if:
//   - final number is between 100 and 999 (inclusive)
//   - middle digit of final number equals seed
// Otherwise print NO
// ============================================================

// Step 1: Take inputs from user
var N    = parseInt(prompt("Enter N:"));
var seed = parseInt(prompt("Enter seed:"));

// Step 2: Apply the transformation exactly 3 times
var current = N;

for (var i = 0; i < 3; i++) {
    if (current % 2 === 0) {
        // even rule
        current = current / 2 + seed;
    } else {
        // odd rule
        current = current * 3 - seed;
    }
}

// Step 3: Check the two conditions
var finalNum = current;

// Condition A: must be a 3-digit number (100 to 999)
var isThreeDigit = (finalNum >= 100 && finalNum <= 999);

// Condition B: middle digit must equal seed
// For a 3-digit number like 947, digits are: 9, 4, 7
// Middle digit is at index 1 of the string
var middleDigit = parseInt(finalNum.toString()[1]);
var middleMatches = (middleDigit === seed);

// Step 4: Show result
if (isThreeDigit && middleMatches) {
    alert("YES, " + finalNum);
} else {
    alert("NO, " + finalNum);
}
