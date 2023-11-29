
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
window.onscroll = function () {
  stickNavbar();
};


function createProductsCards(products) {
  const container = document.getElementById("producto-container");

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card", "mb-3");

    const imageUrl = product.images[0].src;
    const name = product.name.es;
    const price = product.variants[0].price

    card.innerHTML = `
            <img src="${imageUrl} class="card-img-top" alt="${name}">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">$${price}</p>
            </div>
            
    `;

    container.appendChild(card);
  });
}

