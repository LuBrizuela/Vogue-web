
var navbar = document.querySelector('.navbar');
var logo = document.querySelector('.navbar-logo');
var sticky = navbar.offsetTop;


function stickNavbar() {
  if (window.scrollY >= sticky) {
    navbar.classList.add('fixed-top');
    logo.style.display = 'block';
    document.body.style.paddingTop = navbar.offsetHeight + 'px';
  } else {
    navbar.classList.remove('fixed-top');
    logo.style.display = 'none';
    document.body.style.paddingTop = '0';
  }
}


window.onscroll = function () {
  stickNavbar();
};

// carrusel

function filterProductsByCategory(products, categoryName) {
  return products.filter(product => {
    return product.categories && product.categories.some(category => category.name.es === categoryName);
  });
}


function createProductsCards(allProducts) {
  const products = filterProductsByCategory(allProducts, "promocion");
  const carouselInner = document.getElementById("carousel-inner");
  carouselInner.innerHTML = '';


  for (let i = 0; i < products.length; i += 4) {
    const items = products.slice(i, i + 4);

    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (i === 0) carouselItem.classList.add("active"); 

    const cardsWrapper = document.createElement("div");
    cardsWrapper.classList.add("cards-wrapper");


    items.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("card");

      const imageUrl = product.images[0].src;
      const name = product.name.es;
      const price = product.variants[0].price;

      card.innerHTML = `
        <img src="${imageUrl}" class="card-img-top" alt="${name}">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">$${price}</p>
        </div>
      `;

      cardsWrapper.appendChild(card);
    });

    carouselItem.appendChild(cardsWrapper);
    carouselInner.appendChild(carouselItem);
  }
};