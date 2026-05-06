// ============================================================
// Question 3: Mirror Corridor
// Find the smallest non-negative integer X such that:
//   - N + X is a palindrome
//   - N + X is divisible by K
// If no such X exists for 0 <= X <= 100000, print -1
// ============================================================

// Step 1: Take inputs from user
var N = parseInt(prompt("Enter N:"));
var K = parseInt(prompt("Enter K:"));

// Step 2: Helper function - check if a number is a palindrome
// A palindrome reads the same forwards and backwards (e.g. 121, 1221)
function isPalindrome(num) {
    var str = num.toString();
    var reversed = str.split("").reverse().join("");
    return str === reversed;
}

// Step 3: Search for the smallest X
var answer = -1; // default answer if nothing found

for (var X = 0; X <= 100000; X++) {
    var candidate = N + X;

    if (isPalindrome(candidate) && candidate % K === 0) {
        answer = X;
        break; // found the smallest X, stop searching
    }
}

// Step 4: Show result
alert(answer);
