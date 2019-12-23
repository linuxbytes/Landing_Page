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

// console.log(bounding);

const all_sections = document.querySelectorAll("section");

all_sections.forEach(section => {
  // source: https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_data
  // https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
  // // create each links for page section

  const nav_li = document.createElement("li");
  const data_sections = section.getAttribute("data-nav");
  nav_li.innerHTML = `<a href="#${section.id}" class="menu__link">${data_sections}</a>`;
  navbar__list.appendChild(nav_li);

  // highlight each link if click from menu__link
  const li_a = document.getElementsByClassName("menu__link");
  //
  for (var i = 0; i < li_a.length; i++) {
    li_a[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");

      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }

      // Add the active class to the current/clicked button
      this.className += " active";
    });
  }

  window.addEventListener("scroll", function() {

  });
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
