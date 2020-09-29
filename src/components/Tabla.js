import React from 'react'
import { Paginacion } from './Paginacion';

export const Tabla = ({ciudades, ciudadesPorPagina, ciudadesTotales, paginar, cambiarVerDetalles}) => {
    
    return (
        <>
            <table>
                <thead>
                    <tr className="encabezado">
                        <th>Nombre</th>
                        <th>Provincia</th>
                        <th>Temperatura</th>
                        <th>Descripcion</th>
                        <th>Detalles</th>
                    </tr>
                </thead>
                <tbody>
                {
                    ciudades.map(ciudad => (
                        <tr key={ciudad._id}>
                            <td>{ciudad.name}</td>
                            <td>{ciudad.province}</td>
                            <td>{ciudad.weather.tempDesc}</td>
                            <td>{ciudad.weather.description}</td>
                    
                            <td><button onClick={() => cambiarVerDetalles(ciudad._id)} className="btn btn-primary">Ver detalles</button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <Paginacion ciudadesPorPagina = {ciudadesPorPagina} ciudadesTotales = {ciudadesTotales} paginar={paginar} />
            
        </>
    )
}
