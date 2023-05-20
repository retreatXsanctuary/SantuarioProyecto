import { Link } from "react-router-dom";
import "./Empleados.css";

export function Empleados() {
  let Empleados = [
    {
      nombre: "Sofia Millan",
      titulo: "Gerontologa",
      descripcion:
        "Estudia los procesos de enseñanza- aprendizaje en las personas mayores, poniendo énfasis en su situación educativa, así como en las necesidades que presentan en su formación",
      foto: "https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/empleados%2Fsofia.jpeg?alt=media&token=9f151d50-b0a7-4367-9f8b-c2271fadaa0c",
    },
    {
      nombre: "Julian Correa",
      titulo: "Fisioterapeuta",
      descripcion:
        "interviene con técnicas eficaces para tratar deficiencias motrices, programar ejercicio físico adaptado, fortalecer la fuerza muscular, mejorar la resistencia y el equilibrio, valorar la postura y siempre orientados a devolver la confianza en sus capacidades a nuestros",
      foto: "https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/empleados%2Fjulian.jpeg?alt=media&token=6e880535-fad7-4408-8c78-b4a58f3b7191",
    },
    {
      nombre: "Samuel Tabares",
      titulo: "Cuidador y Asistente del cuidado Adulto",
      descripcion: "Asistente de los Demas Cargos y cuidados de los pacientes",
      foto: "https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/empleados%2Fsamuel.jpeg?alt=media&token=04e79c41-e2bd-4747-906f-996362640ce5",
    },
    {
      nombre: "Juan Jose Puerta",
      titulo: "Trabajador Social",
      descripcion:
        "Ayudar al viejo, al anciano, al adulto mayor a mantener niveles óptimos de funcionamiento dentro de sus limitaciones.",
      foto: "https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/empleados%2Fjuan.jpeg?alt=media&token=1c63cc0f-ce23-4992-9bea-10bbcbded6e7",
    },
    {
      nombre: "Esteban Benitez",
      titulo: "Psicologo",
      descripcion:
        "Seguimiento y evaluación de la aplicación del tratamiento que se realice. Dirigir con el equipo interdisciplinar la elaboración de las valoraciones psicológicas y en la atención que precisen los residentes. Realizar el programa de estimulación cognitiva",
      foto: "https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/empleados%2Festeban.jpeg?alt=media&token=6bf9fe6d-1a0a-4e6a-b624-a1ed62d2abc2",
    },
    {
      nombre: "Narent Gutierres",
      titulo: "Cuidador y Asistente del cuidado Adulto",
      descripcion: "Asistente de los Demas Cargos y cuidados de los pacientes",
      foto: "https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/empleados%2Fnarent.webp?alt=media&token=4dce6662-7bba-41e0-862b-61525cbbe026",
    },
  ];

  return (
    <>
      <section>
        <h2 className="titulo_servicios">Empleados</h2>
      </section>
      <h3>Contamos con personal idoneo</h3>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3">
          {Empleados.map(function (empleado) {
            return (
              <div className="col" id="tarjeta">
                <div className="card h-100 shadow text-center">
                  <h1>{empleado.nombre}</h1>
                  <img src={empleado.foto} alt="" className="img-fluid w-100" />
                  <h3>{empleado.titulo}</h3>
                  <p>{empleado.descripcion}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

{
  /*


  return (
    <>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3">
          {serviciosBarberia.map(function (servicio) {
            return (
              <div className="col">
                <div className="card h-100 shadow text-center">
                  <h1>{servicio.nombre}</h1>
                  <img src={servicio.foto} alt="" className="img-fluid w-100" />
                  <p>{servicio.descripcion}</p>
                  <h3>Desde COP ($) {servicio.precio}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="col-12">
            <h1>Por Favor Estudien</h1>
          </div>
        </div>
      </div>
    </>
  );
}



*/
}
