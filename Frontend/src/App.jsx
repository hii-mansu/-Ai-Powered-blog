import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Article from './pages/Article'
import Home from './pages/Home'
import Navbar from './components/global/Navbar'
import Footer from './components/global/Footer'

const App = () => {
  return (
    <div className='bg-linear-to-b from-[#D9D9FF] to-[#F8F3F9]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/article' element={<Article />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App