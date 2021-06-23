import React, {useState, useEffect} from "react"
import axios from "axios"
import "./Deleteitem.css"
const Deleteitem = () =>{


        const [items, setItems] = useState([{}])
        const [idItem, setidItem] = useState("")
        const [status, setStatus] = useState("")
        const [selectedItem, setselectedItem] = useState(false)
        const DeletedItem = () =>{

            axios.post("http://localhost:5000/api/delete",{
                idItem: idItem
            }).then(result=>{

                if(result.data.message){
                    setStatus(result.data.message)
                }
            }).catch(err => console.log(err))
        }


    useEffect(()=>{
        
        axios.get("http://localhost:5000/api/items").then(result =>{
        setItems(result.data)

        }).catch(err => console.log(err))
    }, [])


    return(
        <div className="delete-container">
            <table className="tabla">
                <tr className="titulos-delete">
                    <th className="titulo-de">ID</th>
                    <th className="titulo-de nombre">NOMBRE</th>
                    <th className="titulo-de">PRECIO</th>
                    <th className="titulo-de">TALLA</th>
                </tr>
                {items.map(item =>(
                <tr className="items-del selecteditem" key={item.idItem} onClick={()=>{
                    setselectedItem(true)
                    setidItem(item.idItem)}}>
                    <td className="titulo-de">{item.idItem}</td>
                    <td className="titulo-de">{item.nombreItem}</td>
                    <td className="titulo-de">{item.precio}</td>
                    <td className="titulo-de">{item.talla}</td>
                </tr>
                ))}
            </table>
            <div className="accion-del">

                
                    <h2>Borrar item: {idItem}</h2>
                
                <button className="btn-eliminar" onClick={DeletedItem}>ELIMINAR</button>
                <h2>{status}</h2>
                </div>
        </div>
    )
}

export default Deleteitem