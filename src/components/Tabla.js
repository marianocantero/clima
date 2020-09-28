import React from 'react'

export const Tabla = ({ciudades}) => {
    console.log(ciudades);
    return (
        <table>
            <tr className="encabezado">
                <th>Nombre</th>
                <th>Provincia</th>
                <th>Temperatura</th>
                <th>Descripcion</th>
                <th>Detalles</th>
            </tr>
            {
                ciudades.map(ciudad => (
                    <tr>
                        <td>{ciudad.name}</td>
                        <td>{ciudad.province}</td>
                        <td>{ciudad.weather.tempDesc}</td>
                        <td>{ciudad.weather.description}</td>
                        <td><button className="btn btn-primary">Ver detalles</button></td>
                    </tr>
                ))
            }
        </table>
    )
}
