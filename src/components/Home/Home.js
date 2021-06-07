import React from "react"
import Navbar from "../Navbar/Navbar"
import Herosection from "./Herosection"
import Displayitems from "../DisplayItems/Displayitems"
const Home = () =>{
    
    return(
        <div>
            <Navbar />
            <Herosection/>
            <Displayitems/>
        </div>
    )
}

export default Home