console.log("Script cargado correctamente");

window.addEventListener('load', () => {

    fetch('https://eradigital-api.onrender.com/catalogo/contactos/')
        .catch(error => console.log(error));

});

///// Inicio conexión API formulario
const form = document.getElementById('contactForm');

if (form) {

  form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const boton = form.querySelector('button');

    boton.disabled = true;
    boton.innerText = 'Enviando...';

    const data = {

      nombre: document.getElementById('nombre').value,

      apellido: document.getElementById('apellido').value,

      telefono: document.getElementById('telefono').value,

      correo: document.getElementById('correo').value,

      tipo_cliente: document.getElementById('tipo_cliente').value,

      departamento: document.getElementById('departamento').value,

      servicio_interes: document.getElementById('servicio').value,

      comentario: document.getElementById('comentario').value

    };

    console.log(data);

    try {

      const response = await fetch(
        'https://eradigital-api.onrender.com/catalogo/contactos/',
        {

          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify(data)

        }
      );

      console.log("STATUS:", response.status);

      const result = await response.json();

      console.log("RESPUESTA:", result);

      if (response.ok) {

        Swal.fire({
          icon: 'success',
          title: 'Mensaje enviado',
          text: 'Nos pondremos en contacto contigo pronto.',
          confirmButtonColor: '#4a7fc1'
        });

        form.reset();

      } else {

        const errorData = await response.json();

        console.log(errorData);

        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se pudo enviar el formulario.',
        confirmButtonColor: '#081b29'
        });

      }

    } catch (error) {

      console.log(error);

    }

  });

}
///// Fin conexión API formulario

//// Inicio animación LOGIN

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

if(container && registerBtn && loginBtn){

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

}

//// Fin animación LOGIN


//// Responsive Menu

const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.landing-header__nav');

if(menuToggle && navbar){

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

}

//// Fin Responsive Menu


//// Navbar Scroll
window.addEventListener('scroll', function(){
  let Navbar = document.querySelector('.landing-header');

  if(window.scrollY > 50){
    Navbar.classList.add('scrolled');
  }else{
    Navbar.classList.remove('scrolled');
  }
});



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

//Inicio de animación de tarjetas de precios
const pricingTabs = document.querySelectorAll('.pricing__tab');

pricingTabs.forEach(tab => {

    tab.addEventListener('click', () => {

        document
            .querySelectorAll('.pricing__tab')
            .forEach(btn => btn.classList.remove('active'));

        document
            .querySelectorAll('.pricing__content')
            .forEach(content => content.classList.remove('active'));

        tab.classList.add('active');

        document
            .getElementById(tab.dataset.target)
            .classList.add('active');

    });

});
//Fin de animación de tarjetas de precios

const slides = document.querySelectorAll('.promo__slide');
const dots = document.querySelectorAll('.promo__dot');

const prevBtn = document.querySelector('.promo__arrow--left');
const nextBtn = document.querySelector('.promo__arrow--right');

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide =>
        slide.classList.remove('active')
    );

    dots.forEach(dot =>
        dot.classList.remove('active')
    );

    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

});

prevBtn.addEventListener('click', () => {

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

});

dots.forEach((dot,index)=>{

    dot.addEventListener('click',()=>{

        currentSlide = index;

        showSlide(currentSlide);

    });

});

setInterval(()=>{

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

},5000);

function trackPromo(nombrePromo){

    gtag('event', 'solicitar_promocion', {

        promocion: nombrePromo

    });

}


