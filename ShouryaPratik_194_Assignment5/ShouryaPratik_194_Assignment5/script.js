// ===================================================
// script.js — Course Selection Portal
// Author: First Year Student
// Description: Handles course selection and mobile nav
// ===================================================


// ---- HAMBURGER MENU (Mobile Navigation) ----

// Get the hamburger button and the nav links list from the HTML
var hamburger = document.getElementById("hamburger");
var navLinks  = document.getElementById("navLinks");

// When the hamburger button is clicked, toggle the "open" class
// The "open" class shows/hides the nav menu (controlled in CSS)
hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});


// ---- COURSE SELECTION FUNCTION ----

/**
 * selectCourse(button)
 * Called when a student clicks "Select Course" on any card.
 * @param {HTMLElement} button - The button that was clicked
 */
function selectCourse(button) {

  // Step 1: Get the parent card element (the div that holds course info)
  var card = button.closest(".course-card");

  // Step 2: Read the course data stored in data-* attributes on the card
  var courseName       = card.getAttribute("data-course");
  var courseCode       = card.getAttribute("data-code");
  var courseInstructor = card.getAttribute("data-instructor");

  // Step 3: Remove highlighting from ALL cards first (clean slate)
  var allCards = document.querySelectorAll(".course-card");
  allCards.forEach(function (c) {
    c.classList.remove("selected");       // Remove green border
    var btn = c.querySelector(".select-btn");
    btn.textContent = "Select Course";    // Reset button text
    btn.classList.remove("chosen");       // Reset button color
  });

  // Step 4: Highlight the selected card
  card.classList.add("selected");
  button.textContent = "✔ Selected";
  button.classList.add("chosen");

  // Step 5: Update the result display section with the selected course info
  document.getElementById("res-name").textContent       = courseName;
  document.getElementById("res-code").textContent       = courseCode;
  document.getElementById("res-instructor").textContent = courseInstructor;

  // Step 6: Show the result section (it was hidden with display:none in HTML)
  var resultSection = document.getElementById("selection-result");
  resultSection.style.display = "block";

  // Step 7: Smoothly scroll the page down to show the result box
  resultSection.scrollIntoView({ behavior: "smooth" });
}


// ---- CANCEL SELECTION FUNCTION ----

/**
 * cancelSelection()
 * Removes the selected course and resets all cards to default state.
 */
function cancelSelection() {

  // Hide the result section again
  document.getElementById("selection-result").style.display = "none";

  // Remove selected styling from all cards and reset buttons
  var allCards = document.querySelectorAll(".course-card");
  allCards.forEach(function (c) {
    c.classList.remove("selected");
    var btn = c.querySelector(".select-btn");
    btn.textContent = "Select Course";
    btn.classList.remove("chosen");
  });
}
