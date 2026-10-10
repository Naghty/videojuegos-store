import { useMemo, useState } from 'react';
import useVideojuegos from './hooks/useVideojuegos';
import Navbar from './components/Navbar';
import GameList from './components/GameList';
import AgregarJuegoForm from './components/AgregarJuegoForm';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Estado de los videojuegos, cargado dinamicamente desde una fuente externa
  const { videojuegos, setVideojuegos, cargando, error } = useVideojuegos();

  // Estado de la categoria activa para el filtrado
  const [categoriaActiva, setCategoriaActiva] = useState('todos');

  function agregarJuego(nuevoJuego) {
    setVideojuegos((actuales) => [nuevoJuego, ...actuales]);
  }

  function eliminarJuego(id) {
    setVideojuegos((actuales) => actuales.filter((juego) => juego.id !== id));
  }

  const categorias = useMemo(
    () => [...new Set(videojuegos.map((juego) => juego.categoria))].sort(),
    [videojuegos]
  );

  const juegosFiltrados =
    categoriaActiva === 'todos'
      ? videojuegos
      : videojuegos.filter((juego) => juego.categoria === categoriaActiva);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-grow-1">
        <section id="inicio" className="hero text-white text-center py-5">
          <div className="container">
            <h1 className="display-5 fw-bold">Encuentra tu proximo juego favorito</h1>
            <p className="lead mb-0">Los mejores titulos de accion, aventura, deportes y mas.</p>
          </div>
        </section>

        <section id="catalogo" className="container py-5">
          <h2 className="mb-4">Catalogo de videojuegos</h2>

          <GameList
            juegos={juegosFiltrados}
            cargando={cargando}
            error={error}
            categoriaActiva={categoriaActiva}
            categorias={categorias}
            onCambiarCategoria={setCategoriaActiva}
            onEliminar={eliminarJuego}
          />

          {!cargando && !error && (
            <div className="mt-5">
              <h3 className="h5 mb-3">Agregar nuevo videojuego</h3>
              <AgregarJuegoForm onAgregar={agregarJuego} />
            </div>
          )}
        </section>

        <section id="contacto" className="bg-body-tertiary py-5">
          <div className="container">
            <h2 className="mb-4">Contacto</h2>
            <div className="row">
              <div className="col-lg-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
