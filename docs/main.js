// Navigation menu toggle logic
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav_links");
const menuItems = document.querySelectorAll(".menu-item");
const yearSpan = document.getElementById('year');

/**
 * Toggles the visibility of the mobile navigation menu.
 * @param {boolean} [forceClose=false] - If true, ensures the menu is closed.
 */
const toggleMenu = (forceClose = false) => {
    const isCurrentlyOpen = menuBtn.classList.contains('open');
    const shouldBeOpen = forceClose ? false : !isCurrentlyOpen;

    menuBtn.classList.toggle('open', shouldBeOpen);
    navLinks.classList.toggle('open', shouldBeOpen);
    
    // Disable scrolling when menu is open
    document.body.style.overflow = shouldBeOpen ? 'hidden' : '';
};

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => toggleMenu());

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (menuBtn.classList.contains('open')) {
                toggleMenu(true);
            }
        });
    });
}

// Automatically update the copyright year in the footer
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}