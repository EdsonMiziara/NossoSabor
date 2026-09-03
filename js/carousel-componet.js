import './card-restaurante.js';

export class CarouselRestaurantes extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <div class="row g-4 justify-content-center pt-4 pb-5">
              <card-restaurante img="/src/cobos.png" nome="Cobbos Café"
                descricao="Com um ambiente aconchegante, decoração charmosa,
                 uma grande variedade de doces, cafés e bebidas,
                  ela transforma uma simples pausa para um café em uma experiência especial."
                nota="4.0">
              </card-restaurante>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <div class="row g-4 justify-content-center pt-4 pb-5">
              <card-restaurante img="/src/ilovesmash.jfif" nome="I Love Smash"
                descricao="Com um ambiente moderno e descontraído, decoração jovem, uma grande variedade de hambúrgueres smash, acompanhamentos crocantes,
                     ela transforma um simples lanche em uma experiência deliciosa e cheia de sabor."
                nota="4.5">
              </card-restaurante>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row g-4 justify-content-center pt-4 pb-5">
              <card-restaurante img="/src/gostodefesta.jfif" nome="Gosto de Festa"
                descricao="Com um ambiente amplo e tradicional, decoração festiva, uma grande variedade de salgados, tortas, bolos artesanais e doces, ela transforma
                     uma simples comemoração ou lanche em uma experiência inesquecível e recheada de delícias."
                nota="4.5">
              </card-restaurante>
            </div>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    `;
  }
}

customElements.define('carousel-restaurantes', CarouselRestaurantes);