import React, {useState, useEffect} from "react"
import axios from "axios"

import Item from "./Item"
import "./Displayitems.css"

const Displayitems = () =>{


    const [items, setItems] = useState([{}])

    useEffect(()=>{

             axios.get("http://localhost:5000/api/orders").then(res =>{
             setItems(res.data)
            }).catch(err => console.log(err))
        }, [setItems])
        
        
        return(
            <div>

            <section className="recomendado">
        <h2 className="recomendado-text">Recomendados</h2>
        <hr/>
        </section>
    <section className="scroll-items">
      
        {items.map( item =>(
            
            <Item key={item.idDulce} titulo={item.nombreDulce} precio={item.precio} descripcion={item.tipo} />
            ))}
        
</section>
            </div>
    )
}

export default Displayitems