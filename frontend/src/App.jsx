import React from "react"
import {BrowserRouter as Router, Routes ,Route, Navigate} from "react-router-dom"
import Login from "./pages/Login"
import AdminDashboard from "./pages/AdminDashboard"

function App() {


  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Navigate to="/login"/>}/>
        <Route  path="/login" element={<Login/>} />
        <Route  path="/admin-dashboard" element={<AdminDashboard/>} />
      </Routes>
    </Router>


  )
}

export default App
