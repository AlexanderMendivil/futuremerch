import React from "react"
import "./Login.css"
const Login = () =>{


    const onSubmit = (e) =>{

        e.preventDefault()
    }   

    return(
    
        <div className="container">

    <div className="nav">
        <h1 className="titulof">FUTUREMERCH </h1>
    </div>

    <form className="form">
        
        <h1 className="tituloform">FUTUREMERCH</h1>
        <label htmlFor="Email">Email:</label>
        <input type="Email" placeholder="ejemplo@outlook.com"></input>
        <label htmlFor="Password">Contraseña:</label>
        <input type="password" placeholder="..."></input>

        <button className="btn" onClick={onSubmit}>entrar</button>
    </form>

    </div>
    
    )
}

export default Login