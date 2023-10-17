document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("#navigation-mobile nav");
    const navToggler = document.querySelector("#mobile-nav-toggler");

    navToggler.addEventListener("click", function() {
        // Toggle a class that changes the clip-path
        nav.classList.toggle("show-nav");
    });
});


