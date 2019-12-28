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

// https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/

function inViewPort(element) {
  let bounding = element.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}

all_sections.forEach(section => {
  // source: https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_data
  // // create each links for page section

  const nav_li = document.createElement("li");
  const data_sections = section.getAttribute("data-nav");
  nav_li.innerHTML = `<a href="#${section.id}" class="menu__link">${data_sections}</a>`;
  navbar__list.appendChild(nav_li);
});

window.addEventListener("scroll", function() {
  for (const section of all_sections) {
    if (inViewPort(section)) {
      // add link hightlight
      document.querySelector(`a[href="#${section.id}"]`).style.color = "red";

      section.classList.add("active");
    } else {
      document.querySelector(`a[href="#${section.id}"]`).style.color = "black";

      section.classList.remove("active");
    }
  }
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
