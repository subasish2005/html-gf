function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Initially show the "Likes" section
document.addEventListener('DOMContentLoaded', () => {
    showSection('About');
});// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add 'visible' class to elements in viewport
function checkVisibility() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('visible');
    }
  });
}

// Check visibility on page load and on scroll
window.addEventListener('load', checkVisibility);
window.addEventListener('scroll', checkVisibility);
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });