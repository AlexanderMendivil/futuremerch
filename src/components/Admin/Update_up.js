import React, { useState }from "react"
import axios from "axios"

import "./update_up.css"

const Update_up = ({idItem}) =>{


    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState(0)
    const [imagen, setImagen] = useState("")
    const [talla, setTalla] = useState("")

    const [status, setStatus] = useState("")

    const UpdatedItem = (e) =>{

        e.preventDefault()
        axios.post("http://localhost:5000/api/update",{
        idItem: idItem,
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        imagen: imagen,
        talla: talla
        }).then((result)=>{
            if(result.data.message){
                setStatus(result.data.message)
            }
        }).catch(err => console.log(err))
    }

    return(
        <form className="container_2">
            <h2>Actualizando el item: {idItem}</h2>
            <label className="label-up">Nombre: </label>
            <input className="input-up" type="text" onChange={(e)=>{
                setNombre(e.target.value)
            }}/>

            <label className="label-up">Descripcion: </label>
            <input className="input-up" type="text" onChange={(e)=>{
                setDescripcion(e.target.value)
            }}/>
            <label className="label-up">Precio: </label>
            <input className="input-up" type="text" onChange={(e) =>{
                setPrecio(e.target.value)
            }}/>
            <label className="label-up">Imagen: </label>
            <input className="input-up" type="text" onChange={(e) =>{
                setImagen(e.target.value)
            }}/>
            <label className="label-up">Talla: </label>
            <input className="input-up" type="text" onChange={(e)=>{
                setTalla(e.target.value)
            }}/>
            <button className="btn-up" onClick={UpdatedItem}>Actualizar</button>

            <h1>{status}</h1>
        </form>
    )
}

export default Update_up