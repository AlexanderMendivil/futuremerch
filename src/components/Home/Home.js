import React from "react"
import Navbar from "../Navbar/Navbar"
import Herosection from "./Herosection"
import Displayitems from "../DisplayItems/Displayitems"
import Footer from "../Footer/Footer"
const Home = () =>{
    
    return(
        <div>
            <Navbar />
            <Herosection/>
            <Displayitems/>
            <Footer/>
        </div>
    )
}

export default Home