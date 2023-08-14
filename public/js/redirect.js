// function to check if the screen size is mobile
function isMobile() {
  return window.innerWidth <= 768;
}

// add an event listener to the "about" link
const aboutLink = document.querySelector('[href="/about"]');
aboutLink.addEventListener("click", (event) => {
  event.preventDefault();

  // check if the screen size is mobile
  if (isMobile()) {
    // redirect to "/about-more"
    window.location.href = "/about-more";
  } else {
    // redirect to "/about"
    window.location.href = "/about";
  }
});
