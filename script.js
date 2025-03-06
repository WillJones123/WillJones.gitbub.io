document.addEventListener("DOMContentLoaded", () => {
   // Function to handle smooth scrolling for anchor links
   const smoothScroll = (anchor) => {
      anchor.addEventListener("click", (e) => {
         e.preventDefault();

         const headerOffset = document.querySelector("header").offsetHeight;
         const targetElement = document.querySelector(anchor.getAttribute("href"));
         const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
         const offsetPosition = elementPosition - headerOffset - 20; // Adjust padding

         window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
         });

         // Close mobile nav if open
         if (window.innerWidth <= 768) {
            toggleNavMenu(false);
         }
      });
   };

   // Function to toggle mobile navigation menu
   const toggleNavMenu = (isActive) => {
      const navMenu = document.getElementById("nav-menu");
      navMenu.classList.toggle("active", isActive);
   };

   // Function to handle dark mode toggle
   const toggleDarkMode = () => {
      const body = document.body;
      const icon = document.getElementById("dark-mode-toggle").querySelector("i");

      body.classList.toggle("dark-mode");
      icon.classList.toggle("fa-sun", body.classList.contains("dark-mode"));
      icon.classList.toggle("fa-moon", !body.classList.contains("dark-mode"));
   };

   // Attach smooth scrolling to all nav links
   document.querySelectorAll('nav a[href^="#"]').forEach(smoothScroll);

   // Hamburger menu toggle
   document.getElementById("menu-toggle").addEventListener("click", () => {
      const navMenu = document.getElementById("nav-menu");
      const isActive = !navMenu.classList.contains("active");
      toggleNavMenu(isActive);
   });

   // Dark mode toggle
   document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);
});
