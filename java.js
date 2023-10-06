// Add a smooth scroll effect to the navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const href = this.getAttribute('href');
    const target = document.querySelector(href);

    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});
