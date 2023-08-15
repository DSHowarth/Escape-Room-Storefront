
// mobile menu icon and dropdown elements
const mobileMenuIcon = document.getElementById("mobileMenuIcon");
const mobileMenuDropdown = document.getElementById("mobileMenuDropdown");

// event listener to the mobile menu icon
mobileMenuIcon.addEventListener("click", () => {
  // toggle the 'clicked' class on the icon
  mobileMenuIcon.classList.toggle("clicked");
});
