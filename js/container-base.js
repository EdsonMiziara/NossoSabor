class ContainerBase extends HTMLElement {
    connectedCallback() {
        const titulo = this.getAttribute('titulo') || 'Nosso Sabor';
        
        const conteudoInterno = this.innerHTML;

        this.innerHTML = `
            <main class="container-fluid px-3 px-md-5" id="container-base">
                <div class="row justify-content-center">
                    <div class="col-8 col-md-10 col-lg-11">
                        <div id="container-content" class="p-2 p-md-5 shadow-lg text-center overflow-hidden rounded-2"
                            >
                            
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