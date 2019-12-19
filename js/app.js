/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const all_sections = document.querySelectorAll("section");

all_sections.forEach(section => {
  /**
   * End Global Variables
   * Start Helper Functions
   *
   */

  /**
   * End Helper Functions
   * Begin Main Functions
   *
   */

  // source: https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_data
  // https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
  // // create each links for page section

  const nav_li = document.createElement("li");
  const data_sections = section.getAttribute("data-nav");
  nav_li.innerHTML = `<a href="#${section.id}">${data_sections}</a>`;
  navbar__list.appendChild(nav_li);

  //   need to add viewport dimensions with JavaScript
  // source: https://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript
  function isInViewport(section) {
    let bounding = section.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Add class 'active' to section when near top of viewport

  // Scroll to anchor ID using scrollTO event

  /**
   * End Main Functions
   * Begin Events
   *
   */

  // Build menu

  // Scroll to section on link click
});

document.querySelectorAll('a[href^="#"]').forEach(section => {
  section.addEventListener("click", e => {
    let hashval = section.getAttribute("href");
    let target = document.querySelector(hashval);
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    history.pushState(null, null, hashval);
    e.preventDefault();
  });
});
