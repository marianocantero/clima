import React from 'react'

export const Paginacion = ({ciudadesPorPagina, ciudadesTotales, paginar}) => {
    
    const numeroPaginas = [];

    for (let i = 1; i <= Math.ceil(ciudadesTotales / ciudadesPorPagina ); i++) {
        numeroPaginas.push(i);
      }

    return (
        <nav>
      <ul className='pagination'>
        {numeroPaginas.map(numero => (
          <li key={numero} className='page-item'>
            <button  onClick={() => paginar(numero)} className='page-link'>
              {numero}
            </button>
          </li>
        ))}
      </ul>
    </nav>
    )
}
