import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './home';
import Ebaut from './ebaut';
import Contact from './contact';
import './App.css'


function App() {
 

  return (
    
    <>

     <div className='LinkDiv'>
      <Link to={'/'} >Home</Link>  
      <Link to={'ebaut'}>ebaut</Link>
      <Link to={'contact'}>contact</Link>
     </div>
      
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ebaut" element={<Ebaut />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
     
    </>

  
  )
}

export default App
