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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/

const menu = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');


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

// build the nav
const navMenu = () => {
  let navDirectoty = '';
  // looping over all sections
  sections.forEach(section => {
      const sectionArea = section.id;
      const sectionData = section.dataset.nav;
      navDirectoty += `<li><a class="menu__link" href="#${sectionArea}">${sectionData}</a></li>`;
  });
  // append all elements to the navigation
  menu.innerHTML = navDirectoty;


};

navMenu();



// Add class 'active' to section when near top of viewport
// I had help from stackover flow
// getting the largest value that's less or equal to the number
const offset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

window.addEventListener('scroll', (e) => {
    const sections = document.querySelectorAll('section');
  
    sections.forEach( section => {
      const topDistance = section.getBoundingClientRect().top;
      if (topDistance > 0 && topDistance < 100) {
        section.classList.add('your');
      } else {
        section.classList.remove('your');
      }
    });
  });


// Scroll to anchor ID using scrollTO event
// each section that is selected the page will scroll automatically to the selected section smoothly.

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event){
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    })
})

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu Scroll to section on link click Set sections as active

  function ActiveNavBar (){
    const linksContainer = document.getElementById("navbar__list");
    let links = linksContainer.querySelectorAll('li');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");  
          if (current.length > 0) {
              current[0].className = current[0].className.replace(" active", "");
          }
        this.className += " active";
       });
    };
  }


// ^The section above I added a scroll count and also a click active section. ^
//When you click on a section the back ground will activate and stay with the section that was clicked. 

// Add class 'active' to section when near top of viewport
let viewpoint = document.querySelectorAll('a')

viewpoint.forEach(a => {
    a.addEventListener('click', function () {
        viewpoint.forEach(lis => lis.classList.remove('active'));
        this
            .classList
            .add('active')
    })

});
