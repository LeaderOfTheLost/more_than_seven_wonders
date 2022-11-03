
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'


const WonderDetails = () => {

  const [wonder, setWonder] = useState({})
  const [reviews, setReviews] = useState([])
  const [formState, setFormState] = useState({ title: '', entry: '', location: '', description: '', img: ''})

  let navigate = useNavigate()
  let {id} = useParams()

  const navToWonders = () => {
    navigate(`/`)
  }
  

  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    let response = await axios.post(`/reviews/${id}`, formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
      setReviews([...reviews, response.data.newReview])
      setFormState({ title: '', entry: ''})
  }

  const handleUpdate = async () => {
  
    let response = await axios.put(`/wonders/${id}`, formState)
    .then ((response) => {
      return response
    })
    .catch((error) => {
      console.log(error)
    })
    setWonder([wonder, response.data])
    setFormState({ location: '', description: '', img: ''})
  }

  useEffect(() => {
    const getWonder = async () => {
      let response = await axios.get(`/api/wonders/${id}`)

      setWonder(response.data) 
      setReviews(response.data.reviews)
    } 
    getWonder()
  }, [])


  const handleDelete = async (event) => {
    event.preventDefault()
    let response = await axios.delete(`/wonders/${id}`, formState)
    setWonder(response)
    navToWonders()
  } 
  
  return (
    <div>
      <div>
        <h1>{wonder.location}</h1>
        <img className='wonderPage' src={wonder.img} alt='Wonder'/>
      </div>
      <div>
        <h2>Description</h2>
        <p>{wonder.description}</p>
      </div>
      <div className='reviews'>
        <h3 className='reviewHeader'>Reviews</h3>
        {reviews ? reviews.map((review) => (
          <div key={review._id}>
            <h4>{review.title}</h4>
            <p>{review.entry}</p>
          </div>
        )): ''}
      </div>
      <div>
        <h5>Add Review Below</h5>
      </div>
      <div className='reviewForm'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title:</label>
        <input id='title' value={formState.title} onChange={handleChange} />
        <label htmlFor='entry'>Entry:</label>
        <input type='text' id='entry' value={formState.entry} onChange={handleChange}/>
        <button type='submit'>Submit</button>
      </form>
      </div>
      <div>
        <h5>Update Wonder Below</h5>
      </div>
      <div className='updateForm'>
      <form onSubmit={handleUpdate}>
        <label htmlFor='location'>Location:</label>
        <input id='location' value={formState.location} onChange={handleChange} />
        <label htmlFor='description'>Description:</label>
        <input id='description' value={formState.description} onChange={handleChange}/>
        <label htmlFor='img'>Image URL:</label>
        <input id='img' value={formState.img} onChange={handleChange}/>
        <button type='submit'>Update</button>
      </form>
      </div>
      <div>
      <button className="deleteButton" onClick={handleDelete}>Delete Wonder</button>
      </div>
    </div>
  )
}

export default WonderDetails
