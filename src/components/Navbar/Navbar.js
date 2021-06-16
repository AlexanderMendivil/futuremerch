import React, {useState} from "react"
import {Link} from "react-router-dom"

import "./Navbar.css"
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';

 const Navbar = () => {

    return(
        <div className="nav">
        
        <h1 className="h1"><Link to="/Home" className="titulo">FUTUREMERCH </Link></h1>
        <ul>
            <li className="item-nav">Ropa</li>
            <li className="item-nav">Accesorios</li>
        </ul>
        <div className="search-item">
            <SearchIcon className="icon"/>
            <input className="search" type="text" placeholder="Buscar..." />
        </div>
        
        <Navitem className="h1" icon={<MenuIcon className="iconoMenu" />}>
        <Dropdown />
        </Navitem>
        {/* <MenuIcon className="iconoMenu">
           
            </MenuIcon> */}
     
    </div>
    )
}

const Navitem = (props) =>{

    const [open, setOpen] = useState(false)

    return(
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={(e) =>{ setOpen(!open); e.preventDefault()}}>
                {props.icon}
                </a>

            {open && props.children} 
        </li>
    )
}

const Dropdown = () =>{
    
    const Dropdownitem = (props) =>{

        return(
            <a href="#" className="menu-item" onClick={(e)=> e.preventDefault()}>
                {/* <span className="icon-button">{props.leftIcon}</span> */}
                <p className="p"> {props.children} </p>
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }
    
    return(
        <div className="dropdown">
            <Dropdownitem>My profile</Dropdownitem>
        </div>
    )
}

export default Navbar;