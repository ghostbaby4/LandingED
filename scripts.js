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


/* ====ASISTENTE====== */

document.addEventListener("DOMContentLoaded", () => {
    const asistenteBoton = document.getElementById("asistente-boton");
    const asistenteVentana = document.getElementById("asistente-ventana");
    const asistenteCerrar = document.getElementById("asistente-cerrar");
    const asistenteMensajes = document.getElementById("asistente-mensajes");
    const asistenteOpciones = document.getElementById("asistente-opciones");
    const asistenteContacto = document.getElementById("asistente-contacto");

    if (
        !asistenteBoton ||
        !asistenteVentana ||
        !asistenteCerrar ||
        !asistenteMensajes ||
        !asistenteOpciones ||
        !asistenteContacto
    ) {
        return;
    }
    const numeroWhatsApp = "50589033169";

    const respuestas = {
        equipo: {
            titulo: "Mi equipo está lento",
            mensaje:
                "Puedes comenzar cerrando programas que no utilices y reiniciando el equipo. Si el problema continúa, te recomendamos un diagnóstico técnico y mantenimiento preventivo para identificar la causa.",
            servicio: "Mantenimiento Preventivo"
        },

        conexion: {
            titulo: "Tengo problemas de conexión",
            mensaje:
                "Comprueba que el router esté encendido y revisa si otros dispositivos tienen conexión. Si el problema persiste, Era Digital puede ayudarte con el diagnóstico y la configuración de tu red.",
            servicio: "Soporte Técnico en Línea"
        },

        mantenimiento: {
            titulo: "Necesito mantenimiento",
            mensaje:
                "El mantenimiento preventivo ayuda a mantener tus equipos limpios y con un funcionamiento adecuado. Puedes consultar nuestro servicio a domicilio para recibir atención personalizada.",
            servicio: "Mantenimiento Preventivo a Domicilio"
        },

        servicios: {
            titulo: "Consultar servicios",
            mensaje:
                "En Era Digital ofrecemos mantenimiento a domicilio, soporte técnico en línea, instalación de redes estructuradas y reparación de equipos informáticos.",
            servicio: "Consulta de servicios"
        }
    };

    function abrirAsistente() {
        asistenteVentana.hidden = false;
        asistenteBoton.setAttribute("aria-expanded", "true");
        asistenteBoton.setAttribute("aria-label", "Cerrar asistente");
        asistenteMensajes.scrollTop = asistenteMensajes.scrollHeight;
    }

    function cerrarAsistente() {
        asistenteVentana.hidden = true;
        asistenteBoton.setAttribute("aria-expanded", "false");
        asistenteBoton.setAttribute("aria-label", "Abrir asistente de Era Digital");
        asistenteBoton.focus();
    }

    asistenteBoton.addEventListener("click", () => {
        if (asistenteVentana.hidden) {
            abrirAsistente();
        } else {
            cerrarAsistente();
        }
    });

    asistenteCerrar.addEventListener("click", cerrarAsistente);

    function agregarMensaje(texto, tipo) {
        const mensaje = document.createElement("p");

        mensaje.classList.add("asistente__mensaje");
        mensaje.classList.add(
            tipo === "usuario"
                ? "asistente__mensaje--usuario"
                : "asistente__mensaje--bot"
        );

        mensaje.textContent = texto;
        asistenteMensajes.appendChild(mensaje);
        asistenteMensajes.scrollTop = asistenteMensajes.scrollHeight;
    }
    function registrarInteraccion(opcion) {
        try {
            const clave = "eraDigitalAsistenteMetricas";
            const datos = JSON.parse(sessionStorage.getItem(clave) || "{}");

            datos[opcion] = (datos[opcion] || 0) + 1;
            sessionStorage.setItem(clave, JSON.stringify(datos));
        } catch (error) {
        }
    }

    asistenteOpciones.addEventListener("click", (evento) => {
        const boton = evento.target.closest("button[data-opcion]");

        if (!boton) return;

        const opcion = boton.dataset.opcion;
        const respuesta = respuestas[opcion];

        if (!respuesta) return;

        agregarMensaje(respuesta.titulo, "usuario");
        agregarMensaje(respuesta.mensaje, "bot");

        registrarInteraccion(opcion);

        asistenteContacto.href =
            "contact.html?servicio=" +
            encodeURIComponent(respuesta.servicio);

        asistenteContacto.textContent =
            "Solicitar: " + respuesta.servicio;

        const enlaceWhatsApp = document.createElement("a");

        enlaceWhatsApp.className = "asistente__contacto";
        enlaceWhatsApp.href =
            "https://wa.me/" +
            numeroWhatsApp +
            "?text=" +
            encodeURIComponent(
                "Hola, necesito información sobre: " +
                respuesta.servicio +
                ". Mi consulta es: " +
                respuesta.titulo
            );

        enlaceWhatsApp.target = "_blank";
        enlaceWhatsApp.rel = "noopener noreferrer";
        enlaceWhatsApp.textContent = "Continuar por WhatsApp";

        asistenteMensajes.appendChild(enlaceWhatsApp);
        asistenteMensajes.scrollTop = asistenteMensajes.scrollHeight;
    });

    document.addEventListener("keydown", (evento) => {
        if (
            evento.key === "Escape" &&
            !asistenteVentana.hidden
        ) {
            cerrarAsistente();
        }
    });
});



