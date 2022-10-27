import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import WonderDetails from './components/WonderDetails'

function App() {
  const [wonders, updateWonders] = useState([])
  const [newWonderAdded, toggleNewWonderAdded] = useState(false)

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/wonders')
      updateWonders(response.data.allWonders)
    }
    apiCall()
  }, [newWonderAdded])

  return (
    <div className="App">
      <header className="navbar">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                wonders={wonders}
                toggleNewWonderAdded={toggleNewWonderAdded}
                newWonderAdded={newWonderAdded}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/wonders/:id"
            element={
              <WonderDetails
                wonders={wonders}
                toggleNewReviewAdded={toggleNewWonderAdded}
                newReviewAdded={newWonderAdded}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
