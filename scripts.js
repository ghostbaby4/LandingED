console.log("Script cargado correctamente");

///// Inicio conexión API formulario
const form = document.getElementById('contactForm');

if (form) {

  form.addEventListener('submit', async (e) => {

    e.preventDefault();

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


