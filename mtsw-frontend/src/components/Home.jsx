import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = (props) => {
  const [wonders, updateWonders] = useState([])
  const [formState, setFormState] = useState({ location: '', description: '', img: ''})

  let navigate = useNavigate()

  const renderWonder = (wonder) => {
    navigate(`wonders/${wonder._id}`)
  }

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
      setFormState({ location: '', description: '', img: ''})
      props.toggleNewWonderAdded(!props.newWonderAdded)
  }

  return (
    <div className='wonders'>
      {props.wonders.map((wonder) => (
        <div className='wonder' onClick={() => renderWonder(wonder)} key={wonder._id}>
          <h3>{wonder.location}</h3>
          <img src={wonder.img} alt='wonder not found'/>
       </div>
      ))}

      <h3>Know a place that should be a Wonder of the World. Add it!</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='location'>Location:</label>
        <input id='location' value={formState.location} onChange={handleChange} />
        <label htmlFor='description'>Description:</label>
        <input id='description' value={formState.description} onChange={handleChange}/>
        <label htmlFor='img'>Image URL:</label>
        <input id='img' value={formState.img} onChange={handleChange}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
    )
}


export default Home 