 // Animación suave al hacer scroll
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Efecto de aparición de las tarjetas y secciones
const elements = document.querySelectorAll('.info-card, .about, .achievements');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
      }
  });
}, { threshold: 0.2 });

elements.forEach(element => {
  element.style.opacity = 0;
  element.style.transform = 'translateY(30px)';
  element.style.transition = 'all 0.6s ease';
  observer.observe(element);
});