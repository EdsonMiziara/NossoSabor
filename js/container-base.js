class ContainerBase extends HTMLElement {
    connectedCallback() {
        const titulo = this.getAttribute('titulo') || 'Nosso Sabor';
        
        const conteudoInterno = this.innerHTML;

        this.innerHTML = `
            <main class="container-fluid px-3 px-md-5" style="padding-top: 90px; padding-bottom: 40px;">
                <div class="row justify-content-center">
                    <div class="col-8 col-md-10 col-lg-11">
                        <div class="p-2 p-md-5 shadow-lg text-center overflow-hidden rounded-2"
                            style="background-color: #6f6c5c; color: #efdac1;">
                            
                            <h1 class="fw-bold mb-3">${titulo}</h1>
                            
                            ${conteudoInterno}
                            
                        </div>
                    </div>
                </div>
            </main>
        `;
    }
}

customElements.define('container-base', ContainerBase);