import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
  const [wonders, updateWonders] = useState([])

  useEffect(() => {
    const apiCall = async () => {
      let response = axios.get('http://localhost:3001/wonders')
      updateWonders(response.date)
    }
    apiCall()
  }, [])

  return (
    <div className="App">
      <h2>All wonders HERE</h2>
      {/* {wonders.map((wonder) => (
        <div>
          <h2>{wonder.location}</h2>
        </div>
      ))} */}
    </div>
  )
}

export default App
