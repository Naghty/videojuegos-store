import { useState } from 'react';

const CATEGORIAS_DISPONIBLES = ['Accion', 'Aventura', 'Deportes', 'Estrategia', 'Lucha', 'Simulacion'];
const IMAGEN_POR_DEFECTO = 'arena-legends.svg';

const valoresIniciales = {
  nombre: '',
  categoria: CATEGORIAS_DISPONIBLES[0],
  precio: '',
  descripcion: ''
};

function AgregarJuegoForm({ onAgregar }) {
  const [valores, setValores] = useState(valoresIniciales);
  const [errores, setErrores] = useState({});
  const [mensajeExito, setMensajeExito] = useState('');

  function manejarCambio(evento) {
    const { name, value } = evento.target;
    setValores((actual) => ({ ...actual, [name]: value }));
  }

  function validar() {
    const nuevosErrores = {};

    if (!valores.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.';
    }

    if (!valores.precio || Number(valores.precio) <= 0) {
      nuevosErrores.precio = 'Ingresa un precio valido mayor a 0.';
    }

    if (!valores.descripcion.trim()) {
      nuevosErrores.descripcion = 'La descripcion es obligatoria.';
    }

    return nuevosErrores;
  }

  function manejarEnvio(evento) {
    evento.preventDefault();
    const nuevosErrores = validar();

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      setMensajeExito('');
      return;
    }

    onAgregar({
      id: Date.now(),
      nombre: valores.nombre.trim(),
      categoria: valores.categoria,
      precio: Number(valores.precio),
      descripcion: valores.descripcion.trim(),
      imagen: IMAGEN_POR_DEFECTO
    });

    setValores(valoresIniciales);
    setErrores({});
    setMensajeExito(`"${valores.nombre.trim()}" fue agregado al catalogo.`);
  }

  return (
    <form className="row g-3 bg-light p-3 rounded" onSubmit={manejarEnvio} noValidate>
      <div className="col-md-6">
        <label htmlFor="nombreJuego" className="form-label">
          Nombre del juego
        </label>
        <input
          type="text"
          className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
          id="nombreJuego"
          name="nombre"
          value={valores.nombre}
          onChange={manejarCambio}
        />
        {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
      </div>

      <div className="col-md-3">
        <label htmlFor="categoriaJuego" className="form-label">
          Categoria
        </label>
        <select
          className="form-select"
          id="categoriaJuego"
          name="categoria"
          value={valores.categoria}
          onChange={manejarCambio}
        >
          {CATEGORIAS_DISPONIBLES.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </div>

      <div className="col-md-3">
        <label htmlFor="precioJuego" className="form-label">
          Precio (CLP)
        </label>
        <input
          type="number"
          className={`form-control ${errores.precio ? 'is-invalid' : ''}`}
          id="precioJuego"
          name="precio"
          min="0"
          value={valores.precio}
          onChange={manejarCambio}
        />
        {errores.precio && <div className="invalid-feedback">{errores.precio}</div>}
      </div>

      <div className="col-12">
        <label htmlFor="descripcionJuego" className="form-label">
          Descripcion corta
        </label>
        <textarea
          className={`form-control ${errores.descripcion ? 'is-invalid' : ''}`}
          id="descripcionJuego"
          name="descripcion"
          rows="2"
          value={valores.descripcion}
          onChange={manejarCambio}
        />
        {errores.descripcion && <div className="invalid-feedback">{errores.descripcion}</div>}
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-success">
          Agregar videojuego
        </button>
        {mensajeExito && <span className="ms-3 text-success">{mensajeExito}</span>}
      </div>
    </form>
  );
}

export default AgregarJuegoForm;
