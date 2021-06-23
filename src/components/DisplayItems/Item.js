import React, {useState, useEffect} from "react"
import axios from "axios"

import "./Item.css"

const Item = ({titulo, precio, descripcion, imagen, talla, idItem}) => {
        
    const [fecha, setFecha] = useState("")
    const [idUsuario, setidUsuario] = useState("")

    useEffect(()=>{
        getDate()
        axios.get("http://localhost:5000/api/user").then(result =>{
            setidUsuario(result.data[0].idUsuario)
        })
    },[])

    const getDate = () =>{
        const d = new Date()
        const year = d.getFullYear()
        const month = d.getMonth()
        const day = d.getDay()
        const fechaActual = `${year}-${month}-${day}`
        setFecha(fechaActual)
    }
    const venta = (e) =>{
        e.preventDefault()

        axios.post("http://localhost:5000/api/venta",{
            idUsuario: idUsuario,
            idItem: idItem,
            fecha: fecha
        }).then( ( result ) =>{

        })

    }
    return(

<form className="item">
            <div className="item-img">
                <img className="img-item" src={imagen} alt=""/>
            </div>

            <div className="item-informacion">
                <header>
                    <h1 className="titulo-item">{titulo}</h1>
                </header>
                
                <h2>${precio}</h2>
                <p>{descripcion}</p>

                <div className="check-item">
                    <p>Talla: {talla}</p>
                </div>
                <button onClick={venta}>COMPRAR</button>
            </div>
        </form>

    )
}

export default Item