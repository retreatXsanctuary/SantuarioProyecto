import { Link } from "react-router-dom";
import "./Servicios.css";

export function Servicios() {
  return (
    <>
      <section>
        <h2 className="titulo_servicios">Nuestros Servicios</h2>
      </section>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col-4">
            <div className="card">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/servicio1.jpg?alt=media&token=410cae21-6d1f-4a85-b0d8-6c45134ecdae"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Servicio 1</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/servicio2.png?alt=media&token=67174c93-be66-4316-ad31-9390891d0e5d"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Servicio 2</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/servicio3.webp?alt=media&token=4ffd5fae-ae40-4516-ad57-adeed211608c"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Servicio 3</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>

   
        </div>

        <div className="button">
        <button type="submit" className="btnservices">
              Ver Mas...
            </button>
        </div>
           
          
      </div>

    </>
  );
}
