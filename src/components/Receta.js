import React from 'react'

export const Receta = ({receta}) => {
  return (
    <div className="col-md-4 mb-3 ">
      <div className="card">
       
        <h5 className="card-header">
          {receta.strDrink}
        </h5>
        <img src={receta.strDrinkThumb}
        alt={receta.strDrinkThumb}
        className="card-img-top"
        />
        <div className="card-body">
          <button className="btn btn-block btn-primary"
          type="button">Ver receta</button>
        </div>
      </div>
    </div>
  )
}
