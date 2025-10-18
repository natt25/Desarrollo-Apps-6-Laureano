import './App.css';
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
  <Router>
    <nav className="nav">
      <div className="brand">BookVerse</div>
      <div className="links">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/catalogo">Catálogo</NavLink>
        <NavLink to="/api">Literatura (API)</NavLink>
        <NavLink to="/about">Acerca de</NavLink>
      </div>
    </nav>
    {/* ... */}
  </Router>
  );
}

export default App;
