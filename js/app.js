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
const navigator = document.getElementById('navbar__list'); // get access to the empty unordered list
const secs = document.querySelectorAll('section'); // creates list of sections to utilize
// Source : Slack Channel from Session Leads
// https://knowledge.udacity.com/questions/771618 on 6/11/2022

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
// loop through the sections and append a list item to the nav for each section with a link to the section and the section title 
function buildNav() {
    for (const section of secs) {
        const new_item = document.createElement('li'); // create a new list item
        const new_link = document.createElement('a'); // create a new link tag
        const words = section.getAttribute('data-nav'); // get the data-nav attribute from each section
        const direction = section.getAttribute('id');
        new_link.setAttribute('href', `#${direction}`); // set the href attribute to the id of each section
        new_link.textContent = words;
        new_item.appendChild(new_link); // append the link to the list item
        new_link.classList = "menu__link";
        navigator.appendChild(new_item); // append the list item to the unordered list
    }
}
buildNav();




// Add class 'active' to section when near top of viewport
// Add class 'active' to section when near top of viewport
function checkViewport() {
    for (const section of secs) {
        const screen = (section.getBoundingClientRect()); // get the top of the section
        if (screen.top < 403 && screen.top >= -403 && (window.pageYOffset >= 100)) {
            section.classList.add('your-active-class'); // add the class to the section
            section.style.cssText = "background-color : green;"; // add the style to the section
            for (const nav_items of navigator.children) {
                if (nav_items.textContent === section.getAttribute('data-nav') && (!(window.pageYOffset < 150 && window.pageYOffset > 0))) { // if the section nav attribute matches the words in the list item
                    nav_items.style.cssText = "background-color : green;";
                    nav_items.classList.add('your-active-class');
                } else {
                    nav_items.classList.remove('your-active-class'); // remove the class from the section
                    nav_items.style.cssText = "background-color : white;"; // remove the style from the section

                }
            }

        } else {
            section.classList.remove('your-active-class'); // remove the class from the section
            section.style.cssText = "linear-gradient(0deg, rgba(255, 255, 255, .1) 0%, rgba(255, 255, 255, .2) 100%);"; // remove the style from the section
        }

    }

}
// Source : Slack Channel from Session Leads
// https://knowledge.udacity.com/questions/724370  on 6/12/2022
// https://knowledge.udacity.com/questions/785049 on 6/12/2022


// Scroll to anchor ID using scrollTO event

// Allows user to scroll to sections smoothly via nav buttons
for (const href of document.querySelectorAll('a[href^="#"]')) { // loop through all anchor links
    href.addEventListener('click', function(event) { // event is the click event
        event.preventDefault(); // prevents the default behavior of the link which is non-smooth scrolling
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // smooth scrolling
        });
    });
}
// source https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active
window.addEventListener('scroll', checkViewport) // add event listener to the window & call the checkViewport function