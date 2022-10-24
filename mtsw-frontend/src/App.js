import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function App() { 
  const [wonders, updateWonders] = useState([])
  const [formState, setFormState] = useState({location: '', description: ''})

  useEffect(() => {
    const apiCall = async () => {
    let response = await axios.get('http://localhost:3001/wonders')
    updateWonders(response.data.wonders)
    };
    apiCall()
  }, [])  

    const handleChange = (event) => {
      setFormState({...formState, [event.target.id]: event.target.value})
    } 

 
    const handleSubmit = async (event) => {
      event.preventDefault()
     
      let newWonder = await axios.post('http://localhost:3001/wonders', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
      updateWonders([...wonders, newWonder.data])
      setFormState({location: '', description: ''})
    }
  return (
    <div className="App">
      <h1>All wonders HERE</h1>
      {wonders.map((wonder) => (
        <div key={wonder._id}>
          <h2>{wonder.location}</h2>
        </div>
      ))} 
      <h3>Add a Wonder</h3> 
        <form onSubmit={handleSubmit}>
          <label htmlFor='location'>Location: </label>
          <input id='location' value={formState.location} onChange={handleChange}/>
          <label htmlFor='description'>Description: </label>
          <input id='description' value={formState.description} onChange={handleChange}/>
          <button type='submit'>Add Wonder</button>
        </form>
    </div>
  )
}

export default App
