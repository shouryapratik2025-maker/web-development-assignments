# JS-Assignment — CSE 106 Fundamentals of Web Design

## Assignment 4 — JavaScript Problems

This repository contains solutions to all 6 questions of Assignment 4.
Each question is in its own file. Inputs are taken using `prompt()` and outputs are shown using `alert()`.

---

## Files

| File | Question | Topic |
|------|----------|-------|
| question1.js | Q1 — Digit Gatekeeper | Loops, digit operations, prime check |
| question2.js | Q2 — Roll-Seed Lock | Conditional transformations, string indexing |
| question3.js | Q3 — Mirror Corridor | Palindrome check, linear search |
| question4.js | Q4 — Fare Calculator | Step-by-step arithmetic, Math.ceil, Math.floor |
| question5.js | Q5 — Skipping Numbers | while loop, running sum |
| question6.js | Q6 — Contest Score Judge | Conditional scoring logic |

---

## How to Run

1. Open your browser (Chrome, Firefox, etc.)
2. Open the browser console (press F12 → Console tab)
3. Copy and paste the code from any `.js` file into the console
4. The program will prompt you for inputs using dialog boxes
5. The result will appear in an `alert()` dialog

---

## Approach Summary

### Q1 — Digit Gatekeeper
- Loop from L to R
- For each x: check divisibility by K, check no digit is 0, check digit sum is prime
- Time: O((R-L) * digits) — very fast for the given constraints

### Q2 — Roll-Seed Lock
- Apply the even/odd transformation exactly 3 times
- Check if result is 100–999 and middle digit equals seed
- Time: O(1) — fixed 3 steps

### Q3 — Mirror Corridor
- Loop X from 0 to 100000
- Check if N+X is palindrome AND divisible by K
- Stop at first match
- Time: O(100000) worst case

### Q4 — Fare Calculator
- Apply each rule in the given order using if-else
- Use Math.floor() for 10% surcharge, Math.ceil() for rounding up to multiple of 5
- Time: O(1) — no loops needed

### Q5 — Skipping Numbers
- Use a while loop, increment m, skip multiples of (seed+2)
- Stop when cumulative sum >= N
- Time: O(m) where m is the answer

### Q6 — Contest Score Judge
- Compute score = 3a + b - 2c
- Apply floor and penalty rules in order
- Time: O(1) — pure arithmetic

---

*Created for CSE 106 — First Year Web Development*
