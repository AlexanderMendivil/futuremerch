import React from "react"
import "./Herosection.css"
import imagen from "../../Images/hero_img.jpg"

const Herosection = () =>{

    return(
        <div className="hero-section">

        <div className="hero-text">
            <p>FUTUREMERCH en tus manos</p>
            <h2 className="hero-titulo">Los mejores articulos en un solo lugar!</h2>
            <p>Busca los articulos que más uses y encuentra increibles ofertas</p>

        </div>

        <img className="hero_img" src={imagen} alt=""/>

    </div>
    )
}

export default Herosection