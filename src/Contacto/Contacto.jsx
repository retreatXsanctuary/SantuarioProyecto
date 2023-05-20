import { Link } from "react-router-dom";
import "./Contacto.css";

export function Contacto() {
  return (
    <>
      <section className="fondofans text-white fw-bold">
        <h2 className="titulofans">CONTACTANOS</h2>
        <hr className="line" />
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail" className="form-label">
              Nmbres:
            </label>
            <input type="email" className="form-control" id="inputEmail" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword" className="form-label">
              Apellidos:
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputName" className="form-label">
              Nombres:
            </label>
            <input type="text" className="form-control" id="inputName" />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputLastname" className="form-label">
              Apellidos:
            </label>
            <input type="text" className="form-control" id="inputLastname" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputdireccion" className="form-label">
              Dirección:
            </label>
            <input type="text" className="form-control" id="inputdireccion" />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputfechanacimiento" className="form-label">
              Fecha Nacimiento:
            </label>
            <input
              type="date"
              className="form-control"
              id="inputfechanacimiento"
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputdireccion" className="form-label">
              Telefono Fijo:
            </label>
            <input type="number" className="form-control" id="inputdireccion" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputdireccion" className="form-label">
              Celular:
            </label>
            <input type="number" className="form-control" id="inputdireccion" />
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Mensaje:
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-success">
              Enviar
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
