import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export const Receta = ({receta}) => {

  // configuracion de l modal

  const [ modalStyle ] = useState(getModalStyle)
  const [open, setopen] = useState(false)

  const classes = useStyles()
  
  const handleOpen = () => {

    setopen(true)
  }
  const handleClose = () => {

    setopen(false)
  }
  
  const { detalleReceta, setidreceta } = useContext(ModalContext)

    console.log(detalleReceta);

  const mostrarIngredientes = detalleReceta => {

    let ingredientes = []
    for (let i = 1; i < 16; i++) {
     
      if(detalleReceta[`strIngredient${i}`]){
          ingredientes.push(
            <li>{detalleReceta[`strIngredient${i}`]} - {detalleReceta[`strMeasure${i}`]}</li>
          )
      }

      return ingredientes;
      
    }
  }

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
          <button 
          className="btn btn-block btn-primary"
          type="button"
          onClick={
            () => {
              setidreceta(receta.idDrink)
              handleOpen()
            }
          }>Ver receta</button>

          <Modal
            open = { open}
            onClose= {
              () => {
                
                setidreceta(null)
                handleClose()
              } 
              
            }
          >
            <div style={modalStyle}
            className={classes.paper}>
                <h2 >{detalleReceta.strDrink}</h2>
                <h3 className="mt-4">Instrucciones</h3>
                <p>{
                  detalleReceta.strInstructions
                  }</p>

                  <img src={detalleReceta.strDrinkThumb} className="img-fluid my-4" alt={detalleReceta.strDrink}/>

                  <h3>Ingredientes y cantidades</h3>
                  <ul>
                    { mostrarIngredientes(detalleReceta) }
                  </ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}
