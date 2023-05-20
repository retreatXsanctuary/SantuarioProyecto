import { Link } from "react-router-dom";
import "./Carrusel.css";

export function Carrusel() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/nuevas%20imagenes%2Fcarrusel_img1.webp?alt=media&token=bce91263-749f-45a4-924b-32ba92a1c910"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/nuevas%20imagenes%2Fcarrusel_img2.jpg?alt=media&token=2fef481b-67c4-4264-9edd-7e2847e60a94"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/nuevas%20imagenes%2Fcarrusel_img3.jpg?alt=media&token=e7147cad-5de4-49c7-a40b-81e10facbd05"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/nuevas%20imagenes%2Fcarrusel_img4.png?alt=media&token=6ddfb527-cc38-453f-adda-76e990e86ac7"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
