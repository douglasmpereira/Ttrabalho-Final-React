import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import User from "../Pages/user";
import Home from "../Pages/home";
import Login from "../Pages/login";
import { AuthContext } from "../../src/contexts/auth";


const Rotas = () => {
  const [usuario, setUsuario] = useState(null);

  const logar = (login, senha) => {
    console.log("login auth", { login, senha });
    setUsuario({ nome: "Thatto", senha });
  };

  const logout = () => {
    console.log("logout");
  };

  return (
    <BrowserRouter>
      <AuthContext.Provider
        value={{ authenticated: 
        !!usuario, usuario, logar, logout }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {usuario && <Route path="/user" element={<User />} />}
          <Route path="*" 
          element={usuario ? <User /> : <Navigate to="/login" />}
          />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default Rotas;
