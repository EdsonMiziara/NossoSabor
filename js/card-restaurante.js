class CardRestaurante extends HTMLElement {
    connectedCallback() {
        const img = this.getAttribute('img') || '';
        const nome = this.getAttribute('nome') || 'Restaurante';
        const descricao = this.getAttribute('descricao') || '';
        const nota = parseFloat(this.getAttribute('nota') || '0');
        const link = this.getAttribute('link') || '#';

        this.className = 'col-12 col-md-6 col-lg-4 d-flex justify-content-center';

        const estrelasInteiras = Math.floor(nota);
        const temMeiaEstrela = (nota - estrelasInteiras) >= 0.5;
        let htmlEstrelas = '';

        for (let i = 1; i <= 5; i++) {
            if (i <= estrelasInteiras) {
                htmlEstrelas += `<i class="bi bi-star-fill text-warning fs-5"></i>`;
            } else if (i === estrelasInteiras + 1 && temMeiaEstrela) {
                htmlEstrelas += `<i class="bi bi-star-half text-warning fs-5"></i>`;
            } else {
                htmlEstrelas += `<i class="bi bi-star text-warning fs-5"></i>`;
            }
        }

        this.innerHTML = `
            <div class="card h-100 text-dark overflow-hidden rounded-4 border-0 w-100 shadow" style="max-width: 20rem;">
                
                <img src="${img}" class="card-img-top" alt="${nome}" style="height: 200px; object-fit: cover;">
                
                <div class="card-body text-center d-flex flex-column justify-content-between p-3" style="background-color: #a46843; color: #efdac1;">
                    <h5 class="card-title fw-bold">${nome}</h5>
                    <p class="card-text small">${descricao}</p>
                    ${link !== '#' ? `<a href="${link}" class="btn btn-sm text-white mt-2 align-self-center px-3" style="background-color: #75826f;">Ver mais</a>` : ''}
                </div>
                
                <div class="d-flex align-items-center justify-content-center gap-1 border-top border-light py-2" style="background-color: #a46843; color: #efdac1;">
                    ${htmlEstrelas}
                    <span class="fw-bold ms-2 fs-6" style="color: #efdac1;">${nota.toFixed(1)}/5.0</span>
                </div>

            </div>
        `;
    }
}

customElements.define('card-restaurante', CardRestaurante);