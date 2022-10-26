import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Listings from './components/Listings'
import WonderDetails from './components/WonderDetails'
import WonderForm from './components/WonderForm'



function App() { 
  const [wonders, setWonders] = useState([])
  const [newWonder, setNewWonder] = useState({
    location: '', description: '', img: ''
  })

  const addWonder = (e) => {
    e.preventDefault()
    const currentWonders = wonders
    const createdWonder = {...newWonder,}
    currentWonders.push(createdWonder)
    setWonders(currentWonders)
    setNewWonder({location: '', description: '', img: ''})
  }
  const handleChange = (e) => {
    setNewWonder({...newWonder, [e.target.id]: e.target.value})
  } 

  return (
    <div className='App'>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/listings' element={<Listings wonders={wonders} />}/>
          <Route path='/listings/:id' element={<WonderDetails wonders={wonders} />}/>
          <Route path='/newWonder' element={<WonderForm newWonder={newWonder} handleChange={handleChange} addWonder={addWonder} />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
