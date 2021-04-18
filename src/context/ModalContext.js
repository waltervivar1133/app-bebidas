import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';


// Crear el context 

export const ModalContext = createContext();

 const ModalProvider = (props) => {

  // state del provider

  const [idreceta, setidreceta] = useState(null)
  const [ detalleReceta , setReceta ] = useState([])

  // una vez que tengamos una receta llamamos a la api 

  useEffect(() => {

    const obtenerReceta = async () => {

      if (!idreceta) return;

      try{
        
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`
        const resultado = await axios.get(url)
        setReceta(resultado.data.drinks[0]);
      } 
      catch(error) {
        console.error(error)
      }
    }
    obtenerReceta();

    return( ) => {
      setReceta({});
    };
  }, [idreceta])
  
  return (
    <ModalContext.Provider
      value={{ 
        setidreceta,
        detalleReceta
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}

  export default ModalProvider;