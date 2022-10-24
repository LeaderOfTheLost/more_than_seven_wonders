import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {
  const [wonders, updateWonders] = useState([])
  const [formState, setFormState] = useState({location: '', description: ''})

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/wonders')
      updateWonders(response.data)
    }
    apiCall()
  }, [])

    const handleChange = (event) => {
      setFormState({...formState, [event.target.id]: event.target.value})
    }

    const handleSubmit = async (event) => {
      event.preventDefault()
      console.log(formState)
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
      <h2>All wonders HERE</h2>
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