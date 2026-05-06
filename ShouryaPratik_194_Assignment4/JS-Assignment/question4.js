// ============================================================
// Question 4: Fare Calculator
// Compute fare step by step:
//   1. fare = base + 7 * distance
//   2. if minutesLate > 15,  add 20
//   3. if distance > 10,     add floor(10% of fare)
//   4. if seed is odd,       subtract seed
//      else                  add seed
//   5. round UP to nearest multiple of 5
// ============================================================

// Step 1: Take inputs from user
var base        = parseInt(prompt("Enter base:"));
var distance    = parseInt(prompt("Enter distance:"));
var minutesLate = parseInt(prompt("Enter minutesLate:"));
var seed        = parseInt(prompt("Enter seed:"));

// Step 2: Start with base fare
var fare = base + 7 * distance;

// Step 3: Late penalty
if (minutesLate > 15) {
    fare = fare + 20;
}

// Step 4: Long distance surcharge (10% of current fare, rounded down)
if (distance > 10) {
    var surcharge = Math.floor(fare * 0.10);
    fare = fare + surcharge;
}

// Step 5: Seed adjustment
if (seed % 2 !== 0) {
    // seed is odd
    fare = fare - seed;
} else {
    // seed is even
    fare = fare + seed;
}

// Step 6: Round UP to nearest multiple of 5
// Math.ceil(fare / 5) gives how many 5s fit, then multiply back
fare = Math.ceil(fare / 5) * 5;

// Step 7: Show result
alert(fare);
