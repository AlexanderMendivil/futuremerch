import React, {useState} from "react"
import axios from "axios"
import {Redirect} from "react-router-dom"

import "./Login.css"


const Login = () =>{
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const [loginStatus, setLoginStatus] = useState("")
    const [loginS, setLoginS] = useState(false)
    const loginVerification = (e) =>{
    
            e.preventDefault()

            axios.post("http://localhost:5000/api/login",{
                username: username,
                password: password
            }).then((res) =>{

                if(res.data.message){
                    setLoginStatus(res.data.message)
                    setLoginS(false)
                }else{
                    setLoginStatus(res.data.recordset[0].Nombre)
                    setLoginS(true)

                }
            })

            
    }

    return(
        
        <div>
    <div className="nav">
        <h1 className="titulof">FUTUREMERCH </h1>
    </div>

        <div className="container">
    <form className="form">
        
        <h1 className="tituloform">FUTUREMERCH</h1>
        <label htmlFor="Email">Email:</label>
        <input type="Email" placeholder="ejemplo@outlook.com" onChange={(e)=>{
            setUsername(e.target.value)
        }}/>
        <label htmlFor="Password">Contraseña:</label>
        <input type="password" placeholder="..." onChange={(e) =>{
         setPassword(e.target.value)
        }}/>

        <button className="btn" onClick={loginVerification}>entrar</button>
        {
            (loginS) ? <Redirect to="/Home"/>
            :
            null
        }
    </form>
        <h1 className="mensaje-error">{loginStatus}</h1>
    </div>
        </div>
    
    )
}

export default Login