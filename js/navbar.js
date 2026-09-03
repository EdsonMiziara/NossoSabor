class NavbarComponent extends HTMLElement {
    connectedCallback() {
        const isSubfolder = window.location.pathname.includes('/pages/');
        const basePath = isSubfolder ? '../' : './';
        const path = window.location.pathname.split("/").pop() || "index.html";

        this.innerHTML = `
        <nav class="navbar fixed-top navbar-dark navbar-expand-lg w-100 border-bottom border-white border-opacity-25" id="navbar">
            <div class="container-fluid px-3 px-md-4 d-flex justify-content-between align-items-center">
                
                <a class="navbar-brand icon-link icon-link-hover m-0 p-2" id="navbar-brand"
                    href="${basePath}index.html">
                    <img src="/src/icone_nossosabor.png" id="navbar-brand-img" alt="Nosso Sabor">
                </a>
                <button class="navbar-toggler border-0 shadow-none p-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" data-bs-toggle="collapse"
                    aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav justify-content flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a class="nav-link ${path === 'index.html' ? 'active' : ''}" id="nav-inicio" aria-current="page" href="${basePath}index.html">Início</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ${path === 'restaurantes.html' ? 'active' : ''}" id="nav-restaurantes" href="${isSubfolder ? '' : 'pages/'}restaurantes.html">Restaurantes</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="nav-mais" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Mais
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="${isSubfolder ? '' : 'pages/'}aboutUs.html">Sobre nós</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="${isSubfolder ? '' : 'pages/'}contact.html">Contato</a></li>
                            </ul>
                        </li>
                    </ul>
                <div>


            </div>
        </nav>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header border-bottom border-white border-opacity-25" id="offcanvas-header" >
                <img src="/src/icone_nossosabor.png" id="offcanvas-brand-img" alt="Nosso Sabor" class="me-2">
                <button type="button" class="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body" id="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <a class="nav-link ${path === 'index.html' ? 'active' : ''}" id="nav-inicio" aria-current="page" href="${basePath}index.html">Início</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${path === 'restaurantes.html' ? 'active' : ''}" id="nav-restaurantes" href="${isSubfolder ? '' : 'pages/'}restaurantes.html">Restaurantes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${path === 'melhoresAvaliados.html' ? 'active' : ''}" id="nav-melhores-avaliados" href="${isSubfolder ? '' : 'pages/'}melhoresAvaliados.html">Melhores Avaliados</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="nav-mais" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Mais
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="${isSubfolder ? '' : 'pages/'}aboutUs.html">Sobre nós</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="${isSubfolder ? '' : 'pages/'}contact.html">Contato</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        `;
    }
}
customElements.define('navbar-component', NavbarComponent);