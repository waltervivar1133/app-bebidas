import React, { useContext, useState } from 'react'
import { CategoriasContext } from '../context/CategoriasContext'
import { RecetasContext } from '../context/RecetasContext'

export const Formulario = () => {

    const { categorias  } = useContext(CategoriasContext)
    const { buscarRecetas, setconsultar} = useContext(RecetasContext) 

    const [busqueda, setBusqueda] = useState({
      nombre : '',
      categoria : ''
    })

    // funcion para leer los contenidos
  
    const obtenerDatosReceta = e => {
      setBusqueda({
        ...busqueda,
        [e.target.name] : e.target.value
      })
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();


      setconsultar(true)
      buscarRecetas(busqueda)
      
    }
   
  return (
    <form
     className="col-12"
     onSubmit={handleSubmit}
     >
      <fieldset className="text-center">
        <legend>
          Buscar bebidas por categorias
        </legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input type="text"
          className="form-control"
          name="nombre"
          placeholder="por ingrediente"
          onChange={obtenerDatosReceta}/>
        </div>
        <div className="col-md-4">
          <select name="categoria"
           className="form-control"   
           onChange={obtenerDatosReceta}
           >
              
            <option >--Seleccionar Categoria--</option>
            {
              categorias.map( (categoria) => {

                return(

                  <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>

                )
              })
            }
          </select>
        </div>
        <div className="col-md-4">
          <input type="submit"
          className="btn btn-primary btn-block"
          value="buscar bebidas"/>
        </div>
      </div>
    </form>
  )
}
