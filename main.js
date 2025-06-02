/*===== show menu =====*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*===== show menu =====*/
/* validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== show menu =====*/
/* validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*===== remove menu mobile =====*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/* add blur to header */
const blurHeader = () => {
    const header = document.getElementById('header')
    //when the scrool is greater than 50 viewport height, add the blur-header class
    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header');
}
window.addEventListener('scroll', blurHeader)

/* show scroll up */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-up id
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/* scroll sections active link */
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const navMenu = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        // When the scroll is greater than or equal to the section top and less than or equal to the section top + section height

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navMenu.classList.add('active-link');
        } else {
            navMenu.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);