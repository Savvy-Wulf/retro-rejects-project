const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlist');
    const navLinks = document.querySelectorAll('.navlist li');
    
    burger.addEventListener('click', () => {
      //Toggle Nav
      nav.classList.toggle('nav-active');
  
      //Animate Links
      navLinks.forEach((link, index) => {
        if(link.style.animation) {
          link.style.animation = ''
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
        }
    });
      //Burger Animation
      burger.classList.toggle('toggle');
    });
  }
  
  navSlide();

window.onload= function() {
  Particles.init({
    selector: '.background',
    color: '#A9A9A9',
    connectParticles: true,
  });
};