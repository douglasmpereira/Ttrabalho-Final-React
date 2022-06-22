import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from '../App'
import Login from '../Pages/Login'
import Home from '../Pages/home/home'

const Rotas = () => {
    const [ user ] = useState(true)
    //verificação se o usuário está atenticado;

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login />} />
            {user && <Route path='/home' element={<Home />} />}
            <Route path='*' element={user ? <App /> : <Navigate to='/login' />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Rotas