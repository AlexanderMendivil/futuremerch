import React from "react"
import {Link} from "react-router-dom"

import "./Navbar.css"
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

 const Navbar = () => {

    return(
        <div className="nav">
        
        <h1 ><Link className="titulo">FUTUREMERCH </Link></h1>
        <ul>
            <li className="item-nav">Ropa</li>
            <li className="item-nav">Accesorios</li>
        </ul>
        <div className="search-item">
            <SearchIcon className="icon"/>
            <input className="search" type="text" placeholder="Buscar..." />
        </div>
        
        <MenuIcon className="iconoMenu"/>
     
    </div>
    )
}

export default Navbar;