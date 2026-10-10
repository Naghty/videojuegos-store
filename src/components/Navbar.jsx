function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#inicio">
            GameZone
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuPrincipal"
            aria-controls="menuPrincipal"
            aria-expanded="false"
            aria-label="Abrir menu de navegacion"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menuPrincipal">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#inicio">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#catalogo">
                  Catalogo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
