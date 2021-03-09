import React from "react"

import "./Navbar.css"

 function Navbar(){

    return(
        <div className="Navbar">

            <div className="menu">
            <ul className="">
                <li className="li">Ropa</li>
                <li className="">Accesorios</li>
            </ul>
            </div>

            <h1>FUTUREMERCH</h1>

            <div className="search"><p>Buscar...</p></div>
        </div>
    )
}

export default Navbar;