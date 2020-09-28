import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tabla } from './components/Tabla';

function App() {

    const [ciudades, guardarCiudades] = useState([]);
    const [cargando, guardarCargando] = useState(false);
    const [paginaAcutual, guardarPaginaActual] = useState(1);
    const [ciudadesPorPagina, guardarCiudadesPorPagina]= useState(10);

    useEffect(() => {
      const obtenerCiudades = async () => {
        guardarCargando(true);
        const res = await fetch('https://ws.smn.gob.ar/map_items/weather');
        const data = await res.json();
      
        guardarCiudades(data);
        guardarCargando(false);
      }

      obtenerCiudades();
    }, [])

    const indiceUltimoPost = paginaAcutual * ciudadesPorPagina;
    const indicePrimerPost = indiceUltimoPost - ciudadesPorPagina;
    const ciudadesMostar = ciudades.slice(indicePrimerPost, indiceUltimoPost);
    

  return (
   <div className="container">
     <header className="text-center mb-5"><h1>Climas ciudades Argentina</h1></header>
      <Tabla ciudades={ciudadesMostar}/>

   </div>
  );
}

export default App;
