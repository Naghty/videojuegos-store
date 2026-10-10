import { useState } from 'react';

const valoresIniciales = { nombre: '', email: '', mensaje: '' };

const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactForm() {
  const [valores, setValores] = useState(valoresIniciales);
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  function manejarCambio(evento) {
    const { name, value } = evento.target;
    setValores((actual) => ({ ...actual, [name]: value }));
  }

  function validar() {
    const nuevosErrores = {};

    if (!valores.nombre.trim()) {
      nuevosErrores.nombre = 'Ingresa tu nombre.';
    }

    if (!valores.email.trim()) {
      nuevosErrores.email = 'Ingresa tu email.';
    } else if (!REGEX_EMAIL.test(valores.email.trim())) {
      nuevosErrores.email = 'Ingresa un email valido (ejemplo@dominio.com).';
    }

    if (!valores.mensaje.trim()) {
      nuevosErrores.mensaje = 'Escribe tu mensaje.';
    } else if (valores.mensaje.trim().length < 10) {
      nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
    }

    return nuevosErrores;
  }

  function manejarEnvio(evento) {
    evento.preventDefault();
    const nuevosErrores = validar();
    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      setEnviado(true);
      setValores(valoresIniciales);
    } else {
      setEnviado(false);
    }
  }

  return (
    <form className="row g-3" onSubmit={manejarEnvio} noValidate>
      <div className="col-12">
        <label htmlFor="nombreContacto" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
          id="nombreContacto"
          name="nombre"
          value={valores.nombre}
          onChange={manejarCambio}
        />
        {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
      </div>

      <div className="col-12">
        <label htmlFor="emailContacto" className="form-label">
          Email
        </label>
        <input
          type="email"
          className={`form-control ${errores.email ? 'is-invalid' : ''}`}
          id="emailContacto"
          name="email"
          value={valores.email}
          onChange={manejarCambio}
        />
        {errores.email && <div className="invalid-feedback">{errores.email}</div>}
      </div>

      <div className="col-12">
        <label htmlFor="mensajeContacto" className="form-label">
          Mensaje
        </label>
        <textarea
          className={`form-control ${errores.mensaje ? 'is-invalid' : ''}`}
          id="mensajeContacto"
          name="mensaje"
          rows="4"
          value={valores.mensaje}
          onChange={manejarCambio}
        />
        {errores.mensaje && <div className="invalid-feedback">{errores.mensaje}</div>}
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Enviar mensaje
        </button>
        {enviado && (
          <div className="alert alert-success mt-3 mb-0" role="alert">
            Gracias por tu mensaje, te responderemos pronto.
          </div>
        )}
      </div>
    </form>
  );
}

export default ContactForm;
