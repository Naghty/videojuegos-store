import { useState, useEffect } from 'react';

// Simula la carga de los videojuegos desde una fuente externa (API o archivo)
function useVideojuegos() {
  const [videojuegos, setVideojuegos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelado = false;

    async function cargarVideojuegos() {
      setCargando(true);
      setError(null);

      try {
        const respuesta = await fetch(`${import.meta.env.BASE_URL}data/videojuegos.json`);

        if (!respuesta.ok) {
          throw new Error('No se pudo obtener el catalogo de videojuegos');
        }

        const datos = await respuesta.json();

        // Retardo artificial para simular una API real
        await new Promise((resolver) => setTimeout(resolver, 500));

        if (!cancelado) {
          setVideojuegos(datos);
        }
      } catch (err) {
        if (!cancelado) {
          setError(err.message);
        }
      } finally {
        if (!cancelado) {
          setCargando(false);
        }
      }
    }

    cargarVideojuegos();

    return () => {
      cancelado = true;
    };
  }, []);

  return { videojuegos, setVideojuegos, cargando, error };
}

export default useVideojuegos;
