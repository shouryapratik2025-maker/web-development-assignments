// ============================================================
// Question 6: Contest Score Judge
// Given: a = correct, b = partial, c = wrong answers
//   score = 3a + b - 2c
//   if score < 0,        set score = 0
//   if a + b + c > 50,   subtract 10
//   PASS if score >= 60, else FAIL
// ============================================================

// Step 1: Take inputs from user
var a = parseInt(prompt("Enter number of correct answers (a):"));
var b = parseInt(prompt("Enter number of partially correct answers (b):"));
var c = parseInt(prompt("Enter number of wrong answers (c):"));

// Step 2: Calculate raw score
var score = 3 * a + b - 2 * c;

// Step 3: Score cannot go below 0
if (score < 0) {
    score = 0;
}

// Step 4: Penalty if total questions exceed 50
if (a + b + c > 50) {
    score = score - 10;
}

// Step 5: Determine pass or fail
var status;
if (score >= 60) {
    status = "PASS";
} else {
    status = "FAIL";
}

// Step 6: Show result
alert(score + ", " + status);
