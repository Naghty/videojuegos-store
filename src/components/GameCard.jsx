import imagenes from '../assets/imagenes';
import { formatearPrecio } from '../utils/formato';

function GameCard({ juego, onEliminar }) {
  return (
    <article className="col">
      <div className="card h-100 shadow-sm">
        <img
          src={imagenes[juego.imagen]}
          className="card-img-top"
          alt={`Portada de ${juego.nombre}`}
        />
        <div className="card-body d-flex flex-column">
          <span className="badge text-bg-secondary align-self-start mb-2">{juego.categoria}</span>
          <h3 className="h6 card-title">{juego.nombre}</h3>
          <p className="card-text text-success fw-bold">{formatearPrecio(juego.precio)}</p>
          <p className="card-text small text-secondary flex-grow-1">{juego.descripcion}</p>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm mt-2"
            onClick={() => onEliminar(juego.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
}

export default GameCard;
