import React, { useState, useEffect } from 'react';

import { Tabla } from './components/Tabla';
import { Detalles } from './components/Detalles';

function App() {

    const [ciudades, guardarCiudades] = useState([]);
    const [paginaAcutual, guardarPaginaActual] = useState(1);
    const [ciudadesPorPagina, guardarCiudadesPorPagina]= useState(10);
    const [verdDetalles, guardarVerDetalles] = useState(false);
    const [ciudadActual, guardarCiudadActual] = useState(null);

    useEffect(() => {
      const obtenerCiudades = async () => {
        
        const res = await fetch('https://ws.smn.gob.ar/map_items/weather');
        const data = await res.json();
      
        guardarCiudades(data);
        
      }

      obtenerCiudades();
    }, [])

    //Calculos para el paginado
    const indiceUltimoPost = paginaAcutual * ciudadesPorPagina;
    const indicePrimerPost = indiceUltimoPost - ciudadesPorPagina;
    const ciudadesMostar = ciudades.slice(indicePrimerPost, indiceUltimoPost);

    //Cambia el estado de a pagina actual
    const paginar = numero => {
      guardarPaginaActual(numero);
    }

    //Paso el id al estado y filtro en el componente para mostrar la ciudad en detalle
    const cambiarVerDetalles = (id) => {
      guardarVerDetalles(true);
      guardarCiudadActual(id);
     }


     //Se acciona al boton 'Volver' y regresa a la pantalla principal
     const detallesOcultar = () => {
       guardarVerDetalles(false);
       guardarCiudadActual(null);
     }
    

  return (
   <div className="container">
     <header className="text-center mb-5"><h1>Climas ciudades Argentina</h1></header>

     {verdDetalles ? (  <Detalles  ciudades = {ciudades} ciudadActual={ciudadActual} detallesOcultar={detallesOcultar} /> ) : ( <Tabla ciudades={ciudadesMostar} ciudadesPorPagina={ciudadesPorPagina} ciudadesTotales = {ciudades.length} paginar={paginar}
        cambiarVerDetalles={cambiarVerDetalles} 
      /> )}
      
     
      

   </div>
  );
}

export default App;
