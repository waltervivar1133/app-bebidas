import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [recetas, setrecetas] = useState([])
  const [busqueda, buscarRecetas] = useState({
    nombre : '',
    categoria : ''
  })
  const [consultar, setconsultar] = useState(false)

  const { nombre , categoria } =  busqueda;


  useEffect(() => {

    if (consultar) {
      const obtenerRecetas = async () => {
      
          
          const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`

          const resultado = await axios.get(url)

          setrecetas(resultado.data.drinks);

      }

      obtenerRecetas()
    }
  }, [busqueda])
  return(

    <RecetasContext.Provider
      value = {{
        recetas,
        buscarRecetas,
        setconsultar
      }}
    >
        { props.children}
    </RecetasContext.Provider>
  )
}

export default RecetasProvider;