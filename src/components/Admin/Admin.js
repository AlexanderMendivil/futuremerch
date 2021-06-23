import React, { useState, useEffect } from "react"
import axios from "axios"
import "./Admin.css"
import Insert from "./Insert"
import DeleteItem from "./Deleteitem"
import UpdateItem from "./Updateitem"
import "./Sidemenu.css"
import AddIcon from '@material-ui/icons/Add';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
const Admin = () =>{


    const [insert, setInsert] = useState(false)
    const [borrar, setBorrar] = useState(false)
    const [actualizar, setActualizar] = useState(false)

    const [admin, setAdmin] = useState("")

    useEffect(()=>{
        axios.get("http://localhost:5000/api/admin").then((result)=>{
            setAdmin(result.data[0].nombreAdmin)
        }).catch(err => console.log(err))
    },[])

    return(
        
        <div className="admin">
            <nav className="nav-admin">
                <h1 className="titulo-admin">FUTUREMERCH DEV</h1>
                <p className="useradmin">Admin: {admin}</p>
                <p className="logoutadmin">Logout</p>
            </nav>
            <div className="admin-layout">
            <div className="side">
            <div className="crud-item" onClick={()=>{
                setInsert(true)
                setBorrar(false)
                setActualizar(false)
            }}>
                <AddIcon className="crud-item-icon"/>
                <p className="crud-item-text">Añadir</p>
            </div>
            <div className="crud-item" onClick={()=>{
                setActualizar(true)
                setBorrar(false)
                setInsert(false)
            }}>
                <UpdateIcon className="crud-item-icon"/>
                <p className="crud-item-text">Actualizar</p>
            </div>
            <div className="crud-item" onClick={()=>{
                setBorrar(true)
                setActualizar(false)
                setInsert(false)
            }}>
                <DeleteIcon className="crud-item-icon"/>
                <p className="crud-item-text">Borrar</p>
            </div>
        </div>
            <div className="action-container">
                {
                    (insert) ? <Insert /> : null
                }
                {
                    (borrar) ? <DeleteItem/> : null
                }
                {
                    (actualizar) ? <UpdateItem/> : null
                }
            </div>
            </div>
        </div>
    )
}

export default Admin