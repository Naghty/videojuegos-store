# GameZone - Tienda de Videojuegos (PFY2201 - EFT)

Evaluacion Final Transversal de Desarrollo Frontend I.
Sitio web para una tienda de videojuegos construido con React, Bootstrap 5
y JavaScript, que permite ver el catalogo, filtrar por categoria, agregar y
eliminar videojuegos, y enviar un mensaje a traves de un formulario de
contacto validado.

## Estructura del proyecto

```
index.html
vite.config.js
public/
  data/videojuegos.json      -> fuente externa que se carga con fetch
src/
  main.jsx
  App.jsx                    -> estado principal: videojuegos y categoria activa
  App.css
  hooks/
    useVideojuegos.js        -> useState + useEffect, simula carga desde una API
  components/
    Navbar.jsx                -> barra de navegacion (Bootstrap, semantica)
    GameList.jsx               -> lista de videojuegos + filtro por categoria
    GameCard.jsx                -> tarjeta individual (imagen, nombre, precio, descripcion)
    AgregarJuegoForm.jsx        -> formulario para agregar un videojuego al catalogo
    ContactForm.jsx              -> formulario de contacto con validacion
    Footer.jsx
  assets/
    img/*.svg
    imagenes.js               -> mapa de imagenes importadas
  utils/
    formato.js
```

## Requisitos cubiertos

**HTML, CSS y Bootstrap 5**
- Etiquetas semanticas: header, nav, main, section, footer
- Bootstrap 5 para navbar, tarjetas (cards), grid responsivo y formularios
- CSS propio en App.css para el hero y ajustes puntuales

**JavaScript**
- Los datos de los videojuegos viven en `public/data/videojuegos.json`
  (el objeto con nombre, categoria, precio, descripcion e imagen)
- Las tarjetas se generan dinamicamente recorriendo ese arreglo
- Filtro por categoria mediante botones
- El formulario de contacto valida nombre, email y mensaje antes de
  "enviar", mostrando mensajes de error especificos por campo

**React**
- Componentes separados: Navbar, GameList, GameCard, AgregarJuegoForm,
  ContactForm, Footer
- Estado (`useState`) en `App.jsx` maneja la lista de videojuegos y la
  categoria activa; `useVideojuegos` usa `useState` + `useEffect` para
  cargar los datos de forma asincrona, simulando una API
- Props conectan los componentes: App pasa los datos y las funciones de
  agregar/eliminar/filtrar hacia los componentes hijos
- El estado permite agregar nuevos videojuegos (formulario) y eliminarlos
  (boton en cada tarjeta), reflejandose al instante en la lista filtrada

## Como ejecutarlo localmente

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (normalmente http://localhost:5173).

## Build de produccion

```bash
npm run build
npm run preview
```

## Despliegue en GitHub Pages

`vite.config.js` ya tiene configurado:

```js
base: '/videojuegos-store/',
```

Si tu repositorio se llama distinto, cambia ese valor por `/NOMBRE-DE-TU-REPO/`
antes de desplegar.

```bash
git init
git add .
git commit -m "EFT - GameZone"
git branch -M main
git remote add origin https://github.com/USUARIO/videojuegos-store.git
git push -u origin main

npm run deploy
```

`npm run deploy` compila el proyecto y publica la carpeta `dist` en la rama
`gh-pages` automaticamente (usa el paquete `gh-pages` ya incluido en
`devDependencies`).

Luego en GitHub: Settings > Pages > Source: Deploy from a branch > Branch:
`gh-pages` / `root`.

La URL publica queda como `https://USUARIO.github.io/videojuegos-store/`
