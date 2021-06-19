import React from "react"
import Sidemenu from "./Sidemenu"

import "./Admin.css"

const Admin = () =>{

    return(
        
        <div className="admin">
            <nav className="nav-admin">
                <h1 className="titulo-admin">FUTUREMERCH DEV</h1>
                <p className="useradmin">Name</p>
                <p className="logoutadmin">Logout</p>
            </nav>
            <div className="admin-layout">
            <Sidemenu/>
            {
                

            }
            </div>
        </div>
    )
}

export default Admin