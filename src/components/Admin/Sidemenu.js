import React from "react"
import "./Sidemenu.css"
import AddIcon from '@material-ui/icons/Add';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';


const Sidemenu = () =>{


    return(
        
        <div className="side">
            <div className="crud-item" >
                <AddIcon className="crud-item-icon"/>
                <p className="crud-item-text">Añadir</p>
            </div>
            <div className="crud-item">
                <UpdateIcon className="crud-item-icon"/>
                <p className="crud-item-text">Actualizar</p>
            </div>
            <div className="crud-item">
                <DeleteIcon className="crud-item-icon"/>
                <p className="crud-item-text">Borrar</p>
            </div>
        </div>
    )
}

export default Sidemenu