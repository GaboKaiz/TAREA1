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

// Animación de cambio de imagen de perfil
const profileImg = document.querySelector('.profile-img');
const images = [
  'image1.png',
  'image2.png',
  'image3.png',
  'image4.png'
];
let currentIndex = 0;

function changeImage() {
  profileImg.classList.add('fade');
  setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length;
      profileImg.src = images[currentIndex];
      profileImg.alt = `Foto de Ian Gabriel ${currentIndex + 1}`;
      profileImg.classList.remove('fade');
  }, 500); // Tiempo de la transición de opacidad
}

// Cambia la imagen cada 5 segundos
setInterval(changeImage, 5000);

// Cambia la primera imagen inmediatamente para evitar el retraso inicial
changeImage();