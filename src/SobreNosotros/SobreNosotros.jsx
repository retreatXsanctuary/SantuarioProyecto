import { Link } from "react-router-dom";
import "./SobreNosotros.css";

export function SobreNosotros() {
  return (
    <>
      <section>
        <h1 className="text-center">Historia del negocio</h1>
        <h3>Lema: cuidamos tu flor marchita con mucho amor</h3>
        <img src="https://firebasestorage.googleapis.com/v0/b/retreatsanctuary-379f9.appspot.com/o/extra2.jpg?alt=media&token=01750902-973c-4837-801c-3d173692427c"></img>
      </section>
      <div className="container">
      <p>
        En el año 1956 un grupo conformado por 6 personas, pertenecían a una
        iglesia en un pueblo de Texas, al ser un pueblo antiguo y con minoria de
        personas, era normal ir frecuentemente a la iglesia. Algo curioso del
        pueblo es que la mayoría eran personas de tercera y cuarta edad. Con los
        fondos de la iglesia el líder Julián Montgomery construyó un santuario,
        la idea era vaga pues se creo con el propósito de cuidar a aquellos que
        no podían, a aquellos que se retiraron hace tiempo. El santuario se
        volvió muy famoso al pasar los años, hoy en día es una de las empresas
        más reconocidas del mundo teniendo más de 17 sedes repartidas por el
        planeta.
      </p>
      <h3>Misión</h3>
      <p>La misión de la empresa es brindar atención y cuidados a nuestros abuelitos, brindar la protección que ellos necesitan con las mejores enfermeras, doctores, odontólogos y psicólogos.</p>
      <h3>Visión</h3>
      <p>La visión de la empresa es que en el año 2025 ser recocidos por la OMS como una empresa que cumple las expectativas  de cuidar, proteger y conservar el fugaz sentimiento de proteger a nuestros abuelos. </p>
      <p>Así ningun padre ni hijo enviara a sus abuelos al asilo.</p>
      </div>
      
    </>
  );
}
