import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Résumé from './Pages/Résumé'
import Work from './Pages/Work'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/résumé' element={<Résumé />} />
          <Route path='/my-work' element={<Work />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App