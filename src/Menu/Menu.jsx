import { Link } from "react-router-dom";
import "./Menu.css";

export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg menu navbar-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            RetreatSanctuary
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/servicios"
                >
                  Servicios
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/sobrenosotros">
                  Sobre Nosotros
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/empleados">
                  Empleados
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contacto">
                  Contactanos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
