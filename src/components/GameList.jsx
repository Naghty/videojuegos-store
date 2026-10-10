import GameCard from './GameCard';

function GameList({ juegos, cargando, error, categoriaActiva, categorias, onCambiarCategoria, onEliminar }) {
  if (cargando) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Cargando videojuegos...</span>
        </div>
        <p className="mt-3 text-secondary">Cargando videojuegos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        No pudimos cargar el catalogo: {error}
      </div>
    );
  }

  return (
    <div>
      <div className="d-flex flex-wrap gap-2 mb-4">
        <button
          type="button"
          className={`btn btn-sm ${categoriaActiva === 'todos' ? 'btn-warning' : 'btn-outline-secondary'}`}
          onClick={() => onCambiarCategoria('todos')}
        >
          Todos
        </button>
        {categorias.map((categoria) => (
          <button
            key={categoria}
            type="button"
            className={`btn btn-sm ${categoriaActiva === categoria ? 'btn-warning' : 'btn-outline-secondary'}`}
            onClick={() => onCambiarCategoria(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      {juegos.length === 0 ? (
        <p className="text-secondary">No hay videojuegos en esta categoria.</p>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {juegos.map((juego) => (
            <GameCard key={juego.id} juego={juego} onEliminar={onEliminar} />
          ))}
        </div>
      )}
    </div>
  );
}

export default GameList;
