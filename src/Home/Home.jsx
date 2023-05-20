import { Carrusel } from "../Carrusel/Carrusel";
import { Servicios } from "../Servicios/Servicios";
import "./Home.css";
import { Linea } from "../Linea/Linea";

export function Home() {
  return (
    <>
      <section>
        <Carrusel />
      </section>

      <Linea />

      <section>
        <Servicios />
      </section>

      <Linea />
    </>
  );
}
