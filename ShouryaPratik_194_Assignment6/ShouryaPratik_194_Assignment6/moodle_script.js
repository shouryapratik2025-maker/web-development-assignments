// =====================================================
// script.js — Moodle-like Course Page
// Author: First Year Student
// Description: Interactivity — nav highlight, toggle,
//              submit alerts, download alerts, mobile menu
// =====================================================


// ---- FEATURE 1: MOBILE HAMBURGER MENU ----
// Get the hamburger button and nav links from the HTML
var hamburger = document.getElementById("hamburger");
var navLinks   = document.getElementById("navLinks");

// When hamburger is clicked, toggle the "open" CSS class
// The "open" class makes the nav links visible (defined in CSS)
hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});


// ---- FEATURE 2: ACTIVE NAVIGATION HIGHLIGHT ----
/**
 * setActive(clickedLink)
 * Highlights the nav link that the user clicked.
 * Called by onclick="setActive(this)" on each <a> tag in the nav.
 * @param {HTMLElement} clickedLink - The <a> element that was clicked
 */
function setActive(clickedLink) {

  // Step 1: Get all navigation links on the page
  var allLinks = document.querySelectorAll(".nav-links li a");

  // Step 2: Remove "active" class from every link
  allLinks.forEach(function (link) {
    link.classList.remove("active");
  });

  // Step 3: Add "active" class only to the link that was clicked
  // This turns it blue with an underline (defined in CSS)
  clickedLink.classList.add("active");

  // Step 4: Close mobile menu after clicking a link
  navLinks.classList.remove("open");
}


// ---- FEATURE 3: TOGGLE ANNOUNCEMENTS SHOW/HIDE ----
/**
 * toggleAnnouncements()
 * Shows or hides the announcements list when the button is clicked.
 * Also changes the button label accordingly.
 * Called by onclick="toggleAnnouncements()" on the toggle button.
 */
function toggleAnnouncements() {

  // Get the announcement list div and the button
  var list   = document.getElementById("announcementList");
  var button = document.getElementById("toggleBtn");

  // Check if the list is currently visible
  if (list.style.display === "none") {
    // Currently hidden — show it
    list.style.display = "block";
    button.textContent = "Hide Announcements";
  } else {
    // Currently visible — hide it
    list.style.display = "none";
    button.textContent = "Show Announcements";
  }
}


// ---- FEATURE 4: ASSIGNMENT SUBMIT CONFIRMATION ----
/**
 * submitAssignment(assignmentName)
 * Shows an alert box confirming which assignment was submitted.
 * Called by onclick="submitAssignment('Assignment 1')" on submit buttons.
 * @param {string} assignmentName - Name of the assignment being submitted
 */
function submitAssignment(assignmentName) {

  // Show a browser alert with confirmation message
  alert(
    "✅ " + assignmentName + " submitted successfully!\n\n" +
    "Your submission has been recorded.\n" +
    "You will receive feedback within 3 working days."
  );
}


// ---- FEATURE 5: RESOURCE DOWNLOAD ALERT ----
/**
 * downloadAlert(resourceName)
 * Shows an alert when a download link is clicked.
 * In a real app, this would trigger an actual file download.
 * @param {string} resourceName - Name of the resource being downloaded
 */
function downloadAlert(resourceName) {

  alert(
    "📥 Downloading: " + resourceName + "\n\n" +
    "Your download has started. Check your Downloads folder."
  );
}


// ---- PAGE LOAD: Set first nav link as active by default ----
// Runs automatically when the page finishes loading
// document.addEventListener("DOMContentLoaded") waits for full HTML to load
document.addEventListener("DOMContentLoaded", function () {

  // Find the first nav link and mark it active
  var firstLink = document.querySelector(".nav-links li a");
  if (firstLink) {
    firstLink.classList.add("active");
  }
});
