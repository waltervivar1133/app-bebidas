import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

// crear el context
export const CategoriasContext = createContext();

// provider donde se encuentran las funciones o state

const CategoriasProvider = (props) => {

  // crear el state del context
  const [categorias, setCategorias] = useState([])

  // ejecutar el llamado de api
  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const categorias = await axios.get(url);
      setCategorias(categorias.data.drinks)
    }
    obtenerCategorias()
  }, [])

  return(
    <CategoriasContext.Provider
      value={{
        categorias
      }}
    >
        {props.children}
    </CategoriasContext.Provider>
  )
}

export default CategoriasProvider;