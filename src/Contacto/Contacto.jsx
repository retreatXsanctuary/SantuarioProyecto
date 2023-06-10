import { Link } from "react-router-dom";
import "./Contacto.css";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'
export function Contacto() {
  const [validar, setValidar] =useState(true);
  const [vacio, setVacio] =useState(false);
  const [inputNombres, setinputNombres] = useState(null);
  const [inputHora, setinputHora] = useState(null);
  const [inputFecha, setinputFecha] = useState(null);
  const [inputTelefono, setinputTelefono] = useState(null);
  const [inputCelular, setinputCelular] = useState(null);
  const [errores, seterrores] = useState({});

  function validarFormulario(evento) {
    const regex = new RegExp("^([a-zA-Z0-9@*#]{10,})$");
    evento.preventDefault();
    let listaErrores = {};
  
    if(!inputFecha || !inputHora || !inputCelular || !inputNombres || !inputTelefono ){
      Swal.fire(
        'Error',
        'Todos los campos son obligatorios',
        'error'
      )
      setVacio(true);
    }else{
      setVacio(false);
      if(!regex.test(inputNombres)){
        setValidar(false);
        Swal.fire(
          'Error',
          'El campo de nombre debe tener mínimo 10 caracteres',
          'error'
        )
      }else{
        setValidar(true);
        Swal.fire(
          'Envio satisfactorio',
          'Sacamos 5',
          'success'
        )
      }
      seterrores(listaErrores);
    }
   
  }

  return (
    <>
      <section className="fondofans text-white fw-bold">
        <h2 className="titulofans">AGENDA TU CITA</h2>
        <hr className="line" />
        <form className="row g-3">
          <div className="col-md-12">
            <label htmlFor="inputNombres" className="form-label">
              Nombres Completos:
            </label>
            <input
              type="text"
              className="form-control"
              id="inputNombres"
              style={{ border: !vacio? "none": "3px solid red"} }
            
              onChange={function (evento) {
                setinputNombres(evento.target.value);
              }}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputHora" className="form-label">
              Hora de la Cita:
            </label>
            <input
              type="text"
              className="form-control"
              id="inputHora"
              style={{border: !vacio? "none": "3px solid red"}}
              onChange={function (evento) {
                setinputHora(evento.target.value);
              }}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputFecha" className="form-label">
              Fecha de la Cita:
            </label>
            <input
              type="date"
              className="form-control"
              id="inputFecha"
              style={{border: !vacio? "none": "3px solid red"}}
              
              onChange={function (evento) {
                setinputFecha(evento.target.value);
              }}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputTelefono" className="form-label">
              Telefono Fijo:
            </label>
            <input
              type="number"
              className="form-control"
              id="inputTelefono"
              style={{border: !vacio? "none": "3px solid red"}}
              onChange={function (evento) {
                setinputTelefono(evento.target.value);
              }}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCelular" className="form-label">
              Celular:
            </label>
            <input
              type="number"
              className="form-control"
              id="inputCelular"
              style={{border: !vacio? "none": "3px solid red"}}
              onChange={function (evento) {
                setinputCelular(evento.target.value);
              }}
            />
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-success" onClick={validarFormulario}>
              Enviar
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
