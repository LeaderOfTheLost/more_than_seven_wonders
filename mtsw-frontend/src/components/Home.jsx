
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useParams } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  
  const [wonders, updateWonders] = useState([])
  const [formState, setFormState] = useState({ title: '', entry: '', location: '', description: '', img: ''})

  let navigate = useNavigate()
  // let {id} = useParams()

  const renderWonder = (wonder) => {
    navigate(`wonders/${wonder._id}`)
  }

  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get('http://localhost:3001/wonders')
      updateWonders(response.data.allWonders)
    }
    apiCall()
  }, [])


  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let response = await axios.post('http://localhost:3001/wonders', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })

      updateWonders([...wonders, response.data.newWonder])
      setFormState({ location: '', description: '', img: ''})
      navigate('/')
  }
  
  return (
    <div className='wonders'>
      {wonders.map((wonder) => (
        <div className='wonder' onClick={() => renderWonder(wonder)} key={wonder._id}>
          
          <h3>{wonder.location}</h3>
          <img src={wonder.img} alt='wonder not found'/>
       </div>
      ))}
      <div>
      
      <h3>Know a place that should be a Wonder of the World. Add it!</h3>
      </div>
      <div >
      <form className='formSection' onSubmit={handleSubmit}>
        <label htmlFor='location'>Location:</label>
        <input id='location' value={formState.location} onChange={handleChange} />
        <label htmlFor='description'>Description:</label>
        <input id='description' value={formState.description} onChange={handleChange}/>
        <label htmlFor='img'>Image URL:</label>
        <input id='img' value={formState.img} onChange={handleChange}/>
        <button type='submit'>Submit</button>
      </form>
      </div>
    </div>
    )
    
}


export default Home 