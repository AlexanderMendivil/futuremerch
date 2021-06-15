import React from "react"
import "./Item.css"

const Item = ({titulo, precio, descripcion}) =>{

    return(

<form className="item">
            <div className="item-img">
                <img className="img-item" src="./images/jacket.jpg" alt=""/>
            </div>

            <div className="item-informacion">
                <header>
                    <h1 className="titulo-item">{titulo}</h1>
                </header>
                
                <h2>{precio}</h2>
                <p>{descripcion}</p>

                <div className="check-item">
                    <input className="checkbox" type="checkbox"/><span>C</span>
                    <input className="checkbox" type="checkbox"/><span>M</span>
                    <input className="checkbox" type="checkbox"/><span>G</span>
                </div>
                <button>COMPRAR</button>
            </div>
        </form>

        
    )
}

export default Item