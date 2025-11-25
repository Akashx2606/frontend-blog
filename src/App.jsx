import React from 'react'
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Home from '../Components/Home'
import Form from '../Components/Form'
import Navbar from '../Components/Navbar'

const App = () => {
  return (
    
    
    <BrowserRouter>
    <div>
      <Navbar/>
    <Routes>
      
      <Route path="/home" element={<Home/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/form" element={<Form/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    
  )
}

export default App