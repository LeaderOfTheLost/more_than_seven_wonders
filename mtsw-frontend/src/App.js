import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import WonderDetails from './components/WonderDetails'
import './App.css'

function App() {
  const [wonders, setWonders] = useState([])
  const [reviews, setReviews] = useState([])
  const [newWonderAdded, toggleNewWonderAdded] = useState(false)
  const [newReviewAdded, toggleNewReviewAdded] = useState(false)

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/wonders')
      setWonders(response.data.allWonders)
      setReviews(response.data.allReviews)
    }
    apiCall()
  }, [newWonderAdded, newReviewAdded])

  return (
    <div className="App">
      <header className="nav">
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
                reviews={reviews}
                toggleNewReviewAdded={toggleNewReviewAdded}
                newReviewAdded={newReviewAdded}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
