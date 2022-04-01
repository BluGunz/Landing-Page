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
const navMenu = document.querySelector('.navbar__list');
const navSections = document.querySelectorAll('section');

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
function NavPanel (){     
  
  let content = document.createElement('');
  content.innerHTML = "";
  let liststart = document.createElement('ul');
  let listelement1 = document.createElement('li');
  let listelement2 = document.createElement('li');
  let listelement3 = document.createElement('li');
  let listelement4 = document.createElement('li');
  listelement1.innerHTML = '<a href="#section1">Section 1</a>';
  listelement2.innerHTML = '<a href="#section2">Section 2</a>';
  listelement3.innerHTML = '<a href="#section3">Section 3</a>';
  listelement4.innerHTML = '<a href="#section4">Section 4</a>';
  liststart.appendChild(listelement1);
  liststart.appendChild(listelement2);
  liststart.appendChild(listelement3);
  liststart.appendChild(listelement4);
  let t1 = document.createElement('section');
  let t2 = document.createElement('section');
  let t3 = document.createElement('section');
  let t4 = document.createElement('section');
  t1.id = "section1";
  t2.id = "section2";
  t3.id = "section3";
  t4.id = "section4";

  t1.innerHTML = "Section 1";
  t2.innerHTML = "Section 2";
  t3.innerHTML = "Section 3";
  t4.innerHTML = "Section 4";

  content.appendChild(liststart);
  content.appendChild(t1);
  content.appendChild(t2);
  content.appendChild(t3);
  content.appendChild(t4);
  let html = [
    '<div>',
    '<nav class="navbar__menu">',
    ' <div class="container">',
    '<ul id="navbar__list">',
    '<li><a href="#">Section 1</a></li>',
    '<li><a href="#">Section 2</a></li>',
    '<li><a href="#">Section 3</a></li>',
    '<li><a href="#">Section 4</a></li>',
    '</ul>',

    '</nav>',
    '</div>'
  ].join('\n');
  ("navbar__menu").append(html);
  ("#navbar__list").append(content);
};





// Add class 'active' to section when near top of viewport
// I had help from stackover flow

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
    let linksContainer = document.getElementById("navbar__list");
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