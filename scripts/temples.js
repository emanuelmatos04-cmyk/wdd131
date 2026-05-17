// Footer dynamic year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
 
// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
 
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
 
  if (navMenu.classList.contains("open")) {
    hamburger.textContent = "✖";
  } else {
    hamburger.textContent = "☰";
  }
});