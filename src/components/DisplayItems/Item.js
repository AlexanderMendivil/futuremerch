import React from "react"
import "./Item.css"

const Item = () =>{

    return(

<form className="item">
            <div className="item-img">
                <img className="img-item" src="./images/jacket.jpg" alt=""/>
            </div>

            <div className="item-informacion">
                <header>
                    <h1 className="titulo-item">BLACK JACKET 1980 STYLE</h1>
                </header>
                
                <h2>$80</h2>
                <p>Chaqueta negra estilo 1980 con sujetadores, zippers y botones</p>

                <div className="check-item">
                    <input className="checkbox" type="checkbox"/><span>C</span>
                    <input className="checkbox" type="checkbox"/><span>M</span>
                    <input className="checkbox" type="checkbox"/><span>G</span>
                </div>
                <button id="item">COMPRAR</button>
            </div>
        </form>

        
    )
}

export default Item