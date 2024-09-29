import React from 'react'

import "./App.css"

import Home from './pages/Home/Home'

import { BrowserRouter,Route,Routes  } from "react-router-dom"
import About from './pages/About/About'
import ContactUs from './pages/ContactUs/ContactUs'
import Alumini from './pages/Alumini/Alumini'
import Services from './pages/Services/Services'

const App = () => {
  return (
    <div>

      <BrowserRouter>

        <Routes>

          <Route path='/' element={ <Home/> } />

          <Route path='/about-us' element={ <About/> } />

          <Route path='/contact-us' element={ <ContactUs/> } />

          <Route path='/alumini' element={ <Alumini/>
           } />

          <Route path='/services' element={ <Services/> } />

        </Routes>
      
      </BrowserRouter>

    </div>
  )
}

export default App