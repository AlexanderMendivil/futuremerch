import React, {useState} from "react"
import {Link} from "react-router-dom"
import "./Navbar.css"
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';


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

export const Dropdown = ({name}) =>{
    
    const Dropdownitem = (props) =>{

        return(
            <p className="menu-item" onClick={(e)=> e.preventDefault()}>
                <p className="p"> {props.children} </p>
            </p>
        )
    }
    
    return(
        <div className="dropdown">
            <Dropdownitem>Usuario: {name}</Dropdownitem>
        </div>
    )
}

export default Navbar;