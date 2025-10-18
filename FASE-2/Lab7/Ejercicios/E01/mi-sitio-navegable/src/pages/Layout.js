import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <a href="/" className="brand" aria-label="Inicio">
              <img src="/images/logo.png" alt="Logo del sitio (textil andino)" />
              Crónicas
            </a>
            <NavLink to="/" end>Inicio</NavLink>
            <NavLink to="/articulos">Artículos</NavLink>
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <small>© 2025 Crónicas de Viaje y Cultura · Arequipa, Perú</small>
        </div>
      </footer>
    </>
  );
};

export default Layout;
