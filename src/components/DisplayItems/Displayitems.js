import React from "react"
import Item from "./Item"
import "./Displayitems.css"
const Displayitems = () =>{

    return(
        <section className="recomendado">
        <p>Recomendados</p>
        <hr/>
    <section className="scroll-items">
    <Item/>        
        
</section>
    </section>
    )
}

export default Displayitems