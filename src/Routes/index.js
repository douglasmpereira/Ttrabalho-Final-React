import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import User from "../Pages/user";
import Home from "../Pages/home";
import Login from "../Pages/login";
//import ProtectedRoutes from "../ProtectedRoutes";

const Rotas =()=> {
    const [usuario, setUsuario] = useState()
    

    // try {
    //     useEffect(() => {
    //         Login()
    //         const login = localStorage.getItem(login)
    //         const senha = localStorage.getItem(senha)
    
    //         console.log(login, senha)
    
    //         if(login && senha) {
    //             setUsuario(true)
    //         }
    //     }, [])
    // } catch (error) {
    //     console.log("ERRROU!")
    // }
    

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/home' element={<Home />}/>
                <Route path='/login' element={<Login />}/>
                {usuario && <Route path='/user' element={<User />}/>}
                <Route path='*' element={usuario ? <User/> : <Navigate to= '/login' />} />
            </Routes>
        </BrowserRouter>    
    )
}

export default Rotas