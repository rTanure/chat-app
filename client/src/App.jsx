import { Routes, Route, Navigate } from "react-router-dom"
import { Container } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"

import Chat from "./pages/Chat"
import Login from "./pages/Login"
import Register from "./pages/Register"

import NavBar from "./components/NavBar"

function App() {
  return (
    <>
      <NavBar />
      <Container className="">
        <Routes>
          <Route path="/" element={<Chat />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
      </Container>
    </>
    
  )
}

export default App
