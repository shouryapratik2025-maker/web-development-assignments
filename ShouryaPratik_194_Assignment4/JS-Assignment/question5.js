// ============================================================
// Question 5: Skipping Numbers
// Find the smallest positive integer m such that:
//   sum of all numbers from 1 to m
//   that are NOT divisible by (seed + 2)
//   is at least N
// Print both m and the computed sum
// ============================================================

// Step 1: Take inputs from user
var N    = parseInt(prompt("Enter N:"));
var seed = parseInt(prompt("Enter seed:"));

// Step 2: Calculate the divisor to skip
var skipDivisor = seed + 2;

// Step 3: Keep adding numbers, skipping multiples of skipDivisor
var sum = 0;
var m   = 0;

// We keep going until our sum reaches N
while (sum < N) {
    m = m + 1; // try next number

    // Only add m to sum if it is NOT divisible by skipDivisor
    if (m % skipDivisor !== 0) {
        sum = sum + m;
    }
}

// Step 4: Show result - m and the sum
alert(m + " " + sum);
