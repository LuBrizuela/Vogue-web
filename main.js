
var navbar = document.querySelector('.navbar');
var logo = document.querySelector('.navbar-logo');
var sticky = navbar.offsetTop;

// Añade la clase 'fixed-top' y muestra el logo al hacer scroll
function stickNavbar() {
  if (window.scrollY >= sticky) {
    navbar.classList.add('fixed-top');
    logo.style.display = 'block'; // Muestra el logo
    document.body.style.paddingTop = navbar.offsetHeight + 'px';
  } else {
    navbar.classList.remove('fixed-top');
    logo.style.display = 'none'; // Oculta el logo
    document.body.style.paddingTop = '0';
  }
}

// Escucha el evento de scroll
window.onscroll = function() {
  stickNavbar();
};


// API

const tiendaNube = async() => {
  try {
    const resp = await fetch('https://api.tiendanube.com/v1/9142');

    console.log(resp);

    const datos = await resp.json()
  } catch(error){
    console.log(error);
  }
}

tiendaNube();