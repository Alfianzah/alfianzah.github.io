const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Toggle mobile menu
mobileMenu.addEventListener('click', () => {
    console.log('Menu toggled');
    navLinks.classList.toggle('active');
});

// Smooth scrolling for navigation links
const links = document.querySelectorAll('.nav-links a');

// Remove the event listener for the button
document.querySelector('.btn').addEventListener('click', function(event) {
    // Remove the preventDefault line
    // event.preventDefault(); // This line should be removed
});

// Smooth scrolling for navigation links
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = link.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Select the target section

        // Scroll to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth' // Smooth scroll
        });

        // Close the mobile menu if it's open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});
