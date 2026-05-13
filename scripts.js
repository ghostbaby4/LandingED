console.log("Script cargado correctamente");

//// Navbar Scroll
window.addEventListener('scroll', function(){
  let Navbar = document.querySelector('.landing-header');

  if(window.scrollY > 50){
    Navbar.classList.add('scrolled');
  }else{
    Navbar.classList.remove('scrolled');
  }
});


////Inicio de animación LOGIN
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
////Fin de la animación LOGIN


///// Inicio de función de scroll
document.addEventListener('DOMContentLoaded', () => {
  const animarAlScroll = (elemento, claseAnimacion) => {
    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    }

    function checkScroll() {
      if (isInViewport(elemento)) {
        elemento.classList.add(claseAnimacion);
      }
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); 
  };
  const seccionInicio = document.querySelector('.landing-home');
  animarAlScroll(seccionInicio, 'animate__fadeInDown');

  const seccionServicios = document.getElementById('servicios');
  animarAlScroll(seccionServicios, 'animate__fadeInLeftBig');
});
/////Fin de la animación scroll

