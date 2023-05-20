import { Link } from "react-router-dom";
import "./Footer.css";

export function Footer() {
  return (
    <>
      <>
        <section className="footer-section">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h3 className="footer-title">
                  <span className="footer-title-text">RetreatSanctuary</span>
                  <span className="footer-title-underline" />
                </h3>
                <img
                  className="logo"
                  src="https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/Logo2.jpeg?alt=media&token=6831452d-44e7-48ad-ad1b-7fb4e06b7cb4"
                  alt="logo"
                />
              </div>
              <div className="col-md-3">
                <h3 className="footer-title title-transparent">
                  RetreatSanctuary
                </h3>
                <ul className="quick-link-list">
                  <li>
                    <Link to="/servicios"> Servicios</Link>
                  </li>
                  <li>
                    <Link to="/sobrenosotros"> Sobre Nosotros</Link>
                  </li>
                  <li>
                    <Link to="/contacto"> Contactenos</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h3 className="footer-title title-transparent">
                  RetreatSanctuary
                </h3>
                <ul className="quick-link-list">
                  <li>
                    <Link to="#"> Buscar</Link>
                  </li>
                  <li>
                    <Link to="#"> T & Cs</Link>
                  </li>
                  <li>
                    <Link to="#"> Privacidad</Link>
                  </li>
                  <li>
                    <Link to="#"> Comunidad</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h3 className="footer-title">
                  <span className="footer-title-text"></span>
                  <span className="footer-title-underline" />
                </h3>
                <p className="newsletter">Recibe Nuestras Noticias</p>
                <form action="">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-new"
                      id="usr"
                      name="username"
                      placeholder="Ingresa tu Email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success subscribe btn-sm"
                  >
                    Ingresar
                  </button>
                </form>
                <div id="social">
                  <Link to="https://es-la.facebook.com/" target="_blank">
                    <img
                      className="btnfacebook"
                      src="https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/facebook.png?alt=media&token=8e0df7ee-e5c2-4592-ac09-f46b521194d8"
                      alt=""
                    />
                  </Link>
                  <Link to="https://www.instagram.com/" target="_blank">
                    <img
                      className="btninstagram"
                      src="https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/instagram.png?alt=media&token=cc990c43-592e-4ea1-8d59-85b933bf972d"
                      alt=""
                    />
                  </Link>
                  <Link to="https://twitter.com/" target="_blank">
                    <img
                      className="twiter"
                      src="https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/twiter.png?alt=media&token=2454e37f-5b10-4c69-a812-be9daf8ff973"
                      alt=""
                    />
                  </Link>
                  <Link to="https://www.youtube.com/" target="_blank">
                    <img
                      className="youtube"
                      src="https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/youtube.png?alt=media&token=4bd248bc-a54e-4f11-8a47-5c238a78f3e2"
                      alt=""
                    />
                  </Link>
                  <Link to="https://www.snapchat.com/es" target="_blank">
                    <img
                      className="snapchat"
                      src="https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/snapchat.png?alt=media&token=da82ad47-7abc-4867-92e0-f5396a88e555"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="footer-section-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 footer-bottom-left">
                <p>© Todos los Derechos Reservados</p>
              </div>
              <div className="col-md-6 footer-bottom-right">
                <p>
                  Desarrollado por: Julian Correa / Juan / Sofia / Esteban /
                  Naren /<Link to="/"> RetreatSanctuary</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
