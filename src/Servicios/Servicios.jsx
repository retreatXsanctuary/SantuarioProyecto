import { Link } from "react-router-dom";
import "./Servicios.css";

export function Servicios() {
  const servicios = [
    {
      titulo: "Cuidado personal",
      foto: "https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/servicio1.jpg?alt=media&token=410cae21-6d1f-4a85-b0d8-6c45134ecdae",
      descripcion: "Brindar asistencia en la higiene personal diaria...",
    },
    {
      titulo: "Administración de medicamentos",
      foto: "https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/servicio2.png?alt=media&token=67174c93-be66-4316-ad31-9390891d0e5d",
      descripcion: "Ayudar a los adultos mayores a tomar sus medicamentos ...",
    },
    {
      titulo: "Acompañamiento y actividades recreativas",
      foto: "https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/servicio3.webp?alt=media&token=4ffd5fae-ae40-4516-ad57-adeed211608c",
      descripcion:
        " Proporcionar compañía a los adultos mayores, participar ...",
    },
    {
      titulo: "Cuidado de la alimentación",
      foto: "https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/servicio3.webp?alt=media&token=4ffd5fae-ae40-4516-ad57-adeed211608c",
      descripcion:
        "Preparar comidas nutritivas y adaptadas a las necesidades dietéticas de los adultos mayores, supervisar ...",
    },
    {
      titulo: "Gestión de la medicación",
      foto: "https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/servicio3.webp?alt=media&token=4ffd5fae-ae40-4516-ad57-adeed211608c",
      descripcion:
        "Coordinar y administrar los medicamentos prescritos por los profesionales de la salud.",
    },
    {
      titulo: "Servicios de transporte",
      foto: "https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/servicio3.webp?alt=media&token=4ffd5fae-ae40-4516-ad57-adeed211608c",
      descripcion:
        "Ayudar a los adultos mayores a desplazarse hacia y desde citas médicas,es, asegurando su seguridad. ",
    },
    {
      titulo: "Asistencia en la movilidad",
      foto: "https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/servicio3.webp?alt=media&token=4ffd5fae-ae40-4516-ad57-adeed211608c",
      descripcion:
        "Proporcionar apoyo físico y asistencia en la movilidad a los la fuerza y la flexibilidad.",
    },
    {
      titulo: "Servicios de terapia ocupacional",
      foto: "https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/servicio3.webp?alt=media&token=4ffd5fae-ae40-4516-ad57-adeed211608c",
      descripcion:
        "Colaborar con terapeutas ocupacionales para implementa adultos mayores.",
    },
    {
      titulo: "Servicios de enfermería",
      foto: "https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/servicio3.webp?alt=media&token=4ffd5fae-ae40-4516-ad57-adeed211608c",
      descripcion:
        "Contar con personal de enfermería capacitado para icos, monitorear signos vitales.",
    },
    {
      titulo: "Asesoramiento y apoyo emocional",
      foto: "https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/servicio3.webp?alt=media&token=4ffd5fae-ae40-4516-ad57-adeed211608c",
      descripcion:
        "Brindar orientación y apoyo emocional a los adultos mayores",
    },
  ];
  return (
    <>
      <section>
        <h2 className="titulo_servicios">Nuestros Servicios</h2>
      </section>

      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {servicios.map((servicio) => {
            return (
              <div className="card">
                <img src={servicio.foto} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{servicio.titulo}</h5>
                  <p className="card-text">{servicio.descripcion}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
/**  <>
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
                <h5 className="card-title">Cuidado personal</h5>
                <p className="card-text">
                Brindar asistencia en la higiene personal diaria, como bañarse, vestirse, afeitarse, peinarse y cuidado dental, para garantizar el bienestar y la comodidad de los adultos mayores.
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
                <h5 className="card-title">Administración de medicamentos</h5>
                <p className="card-text">
                Ayudar a los adultos mayores a tomar sus medicamentos de manera adecuada y en los momentos correctos, siguiendo las indicaciones médicas y asegurando la adherencia al tratamiento.

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
                <h5 className="card-title">Acompañamiento y actividades recreativas</h5>
                <p className="card-text">
                Proporcionar compañía a los adultos mayores, participar en actividades recreativas y fomentar la interacción social para evitar el aislamiento y promover un estilo de vida activo y saludable.
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
                <h5 className="card-title">Cuidado de la alimentación</h5>
                <p className="card-text">
                Preparar comidas nutritivas y adaptadas a las necesidades dietéticas de los adultos mayores, supervisar la ingesta de alimentos y proporcionar asistencia durante las comidas si es necesario.
              
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
                <h5 className="card-title">Gestión de la medicación</h5>
                <p className="card-text">
                Coordinar y administrar los medicamentos prescritos por los profesionales de la salud, asegurando que se soliciten y reabastezcan los medicamentos a tiempo, y manteniendo un registro preciso de la medicación
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
                <h5 className="card-title">Servicios de transporte</h5>
                <p className="card-text">
                Ayudar a los adultos mayores a desplazarse hacia y desde citas médicas, supermercados, eventos sociales u otras actividades, asegurando su seguridad y comodidad durante el viaje.

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
                <h5 className="card-title">Asistencia en la movilidad</h5>
                <p className="card-text">
                Proporcionar apoyo físico y asistencia en la movilidad a los adultos mayores, utilizando dispositivos de ayuda: como andadores o bastones y ayudándolos a realizar ejercicios de movilidad para mantener la fuerza y la flexibilidad.

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
                <h5 className="card-title">Servicios de terapia ocupacional</h5>
                <p className="card-text">
                Colaborar con terapeutas ocupacionales para implementar programas que ayuden a los adultos mayores a mantener o mejorar su capacidad funcional en actividades cotidianas, como vestirse, cocinar o realizar tareas domésticas.

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
                <h5 className="card-title">Servicios de enfermería</h5>
                <p className="card-text">
                Contar con personal de enfermería capacitado para realizar chequeos de salud periódicos, monitorear signos vitales, administrar inyecciones y proporcionar atención médica básica, según las necesidades individuales de cada adulto mayor.

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
                <h5 className="card-title">Asesoramiento y apoyo emocional</h5>
                <p className="card-text">
                Brindar orientación y apoyo emocional a los adultos mayores y sus familias, ayudándolos a lidiar con los desafíos emocionales y psicológicos asociados con el envejecimiento, y facilitando la conexión con recursos comunitarios adicionales según sea necesario.
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
           
          
      </div> */
