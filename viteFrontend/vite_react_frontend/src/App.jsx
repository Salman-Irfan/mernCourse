import React from 'react'
import Navbar from './layouts/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import AllNotes from './views/AllNotes'
import AddNote from './views/AddNote'
import About from './views/About'
import Contact from './views/Contact'
import Footer from './layouts/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      {/* define routes */}
      <Routes>
        {/* home route */}
        <Route path='/' element={<Home/>}/>
        {/* notes */}
        <Route path='/notes' element={<AllNotes />} />
        {/* add note */}
        <Route path='/addnote' element={<AddNote />} />
        {/* about */}
        <Route path='/about' element={<About />} />
        {/* contact */}
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {/* footer */}
      <Footer/>
    </>
  )
}

export default App