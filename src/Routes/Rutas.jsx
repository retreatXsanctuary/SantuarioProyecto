import { Route, Routes } from "react-router-dom";

import { Menu } from "../Menu/Menu";
import { Footer } from "../Footer/Footer";
import { Home } from "../Home/Home";
import { Servicios } from "../Servicios/Servicios";
import { SobreNosotros } from "../SobreNosotros/SobreNosotros";
import { Contacto } from "../Contacto/Contacto";
import { Empleados } from "../Empleados/Empleados";

export function Rutas() {
  return (
    <>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="sobrenosotros" element={<SobreNosotros />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="empleados" element={<Empleados />} />
      </Routes>

      <Footer />
    </>
  );
}
