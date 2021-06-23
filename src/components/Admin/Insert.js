import React, {useState, useEffect} from "react"
import axios from "axios"

import "./insert.css"

const Insert = () =>{

    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [precio, setPrecio] = useState(0)
    const [imagen, setImagen] = useState("")
    const [talla, setTalla] = useState("")
    const [fecha, setFecha] = useState("")


    const [saveAdmin, setsaveAdmin] = useState("")
    const [status, setStatus] = useState("")


    const getDate = () =>{
        
        const d = new Date()
        const year = d.getFullYear()
        const month = d.getMonth()
        const day = d.getDay()
        const fechaActual = `${year}-${month}-${day}`
        setFecha(fechaActual)
    }
    const insertButton = (e) =>{
        
        console.log(fecha)
        e.preventDefault()

        axios.post("http://localhost:5000/api/insert",{
            saveAdmin: saveAdmin,
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            imagen: imagen,
            talla: talla,
            fecha: fecha,
            
        }).then((result)=>{
            if(result.data.message){
                setStatus(result.data.message)
            } 
        }).catch(err => console.log(err))
    }

    useEffect(()=>{
        getDate()
        axios.get("http://localhost:5000/api/admin").then(result =>{

        setsaveAdmin(result.data[0].idAdmin)
        })
    }, [])


    return(

        <div className="insert-container">
            <h1>Agrega items</h1>
            <form className="form-insert">

                <div className="module-insert">

                    <div>
                <label>Nombre:</label>
                <input className="input-insert" type="text" onChange={(e)=> setNombre(e.target.value)}/>
                    </div>
                
                <div>

                <label>Descripcion:</label>
                <input className="input-insert" type="text" onChange={(e)=> setDescripcion(e.target.value)}/>
                </div>
                </div>

                <div className="module-insert">

                    <div>
                <label>Precio:</label>
                <input className="input-insert" type="text" onChange={(e)=> setPrecio(e.target.value)}/>
                    </div>

                <div>

                <label>Imagen:</label>
                <input className="input-insert" type="text" onChange={(e)=> setImagen(e.target.value)}/>
                </div>

                </div>

                <div className="module-insert">
                <div>
                <label>Talla:</label>
                <input className="input-insert" type="text" onChange={(e)=> setTalla(e.target.value)}/>
                </div>
                </div>

                <button className="btn-insert" onClick={insertButton}>Añadir</button>

            <h1>{status}</h1>
            </form>
        </div>
    )
}

export default Insert