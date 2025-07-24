// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Typing effect in About section
const aboutText = "Hello! I'm a web developer passionate about building clean and interactive websites.";
const aboutElement = document.querySelector('#about p');
let index = 0;

function typeEffect() {
  if (index < aboutText.length) {
    aboutElement.innerHTML += aboutText.charAt(index);
    index++;
    setTimeout(typeEffect, 40); // typing speed
  }
}
window.onload = typeEffect;

// Contact form alert
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("📧 Thanks for your message! I'll get back to you soon.");
  this.reset(); // clear the form
});
