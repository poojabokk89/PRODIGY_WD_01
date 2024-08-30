// Add event listener for scroll events
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    
    // Change background color of navbar when scrolled
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#444"; // Darker color when scrolled
    } else {
        navbar.style.backgroundColor = "#333"; // Original color when at top
    }
});
