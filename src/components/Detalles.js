import React from 'react'

export const Detalles = ({ciudades, ciudadActual, detallesOcultar}) => {
   
        const res = ciudades.filter(ciudad => ciudad._id === ciudadActual)
        const detalles = res[0];
       
        
  
    return (
        <div className="container">
            <div className="card" >
                <div className="card-body">
                    <h2 className="card-title text-center bg-info text-light pb-3 pt-3">{detalles.name}</h2>
                    <h6 className="card-subtitle mb-2 text-muted">Mas información:</h6>
                
                         <ul className="list-group">
                            <li className="list-group-item">Provincia: <span>{detalles.province}</span></li>
                            <li className="list-group-item">Estado: <span></span>{detalles.weather.description}</li>
                            <li className="list-group-item">Humedad: <span>{detalles.weather.humidity}%</span></li>
                            <li className="list-group-item">Temperatura: <span>{detalles.weather.tempDesc}</span></li>
                            <li className="list-group-item">Visibilidad: <span>{detalles.weather.visibility}%</span></li>
                            <li className="list-group-item">Velocidad del viento: <span>{detalles.weather.wind_speed} km/h</span></li>
                         </ul>
                    
                </div>
            </div>
            <button className="btn btn-info mt-2" onClick={() => detallesOcultar()} >Volver</button>
    </div>
    )
}
