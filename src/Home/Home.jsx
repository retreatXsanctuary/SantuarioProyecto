import { Carrusel } from "../Carrusel/Carrusel";
import { Servicios } from "../Servicios/Servicios";
import "./Home.css";
import { Linea } from "../Linea/Linea";
import { SobreNosotros } from "../SobreNosotros/SobreNosotros";

export function Home() {
  return (
    <>
      <section>
        <Carrusel />
      </section>

      <Linea />

      <section>
        <SobreNosotros />
      </section>

      <Linea />
    </>
  );
}
