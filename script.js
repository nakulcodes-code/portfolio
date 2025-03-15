window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
  document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('open');
  });
  // Create an Intersection Observer to detect when sections are in view
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.fade-in-up'); // Select all sections with the fade-in-up class

  const observerOptions = {
    threshold: 0.5, // Trigger the animation when 50% of the section is visible
  };

  // Callback function for the Intersection Observer
  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the class when the section comes into view
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target); // Stop observing after the animation is triggered
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach(section => {
    observer.observe(section); // Start observing each section
  });
});

  