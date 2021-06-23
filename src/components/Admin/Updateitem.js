import React, { useState, useEffect } from "react"
import axios from "axios"
import "./Updateitem.css"
import ItemUpdate from "./Update_up"

const Updateitem = () =>{

    const [items, setItems] = useState([{}])
    const [selectedItem, setselectedItem] = useState(false)
    const [selectedIdItem, setselectedIdItem] = useState("")
    useEffect(() =>{
        axios.get("http://localhost:5000/api/items").then((result) => {
            setItems(result.data)
        }).catch(err => console.log())
    },[])

    return(
        <div className="update-container">
            <table className="tabla tabla-update">
                <tr className="titulos-delete">
                    <th className="titulo-de">ID</th>
                    <th className="titulo-de nombre">NOMBRE</th>
                    <th className="titulo-de">PRECIO</th>
                    <th className="titulo-de">TALLA</th>
                </tr>
                {items.map(item =>(
                <tr className="items-del selecteditem" key={item.idItem} onClick={()=>{
                    setselectedItem(true)
                    setselectedIdItem(item.idItem)
                    }}>
                    <td className="titulo-de">{item.idItem}</td>
                    <td className="titulo-de">{item.nombreItem}</td>
                    <td className="titulo-de">{item.precio}</td>
                    <td className="titulo-de">{item.talla}</td>
                </tr>
                ))}
            </table>
            {
                (selectedItem) ? <ItemUpdate idItem={selectedIdItem}/> : null
            }
        </div>
    )

}

export default Updateitem