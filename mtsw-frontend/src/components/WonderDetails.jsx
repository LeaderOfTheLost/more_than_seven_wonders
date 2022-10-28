import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const WonderDetails = (props) => {

  const [wonder, setWonder] = useState({})
  const [reviews, setReviews] = useState([])
  const [formState, setFormState] = useState({ title: '', entry: ''})
  let {id} = useParams()

  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    let newReview = await axios.post(`http://localhost:3001/reviews/${id}`, formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
      setReviews([...reviews, newReview.data.newReview])
      setFormState({ title: '', entry: ''})
  }

  useEffect(() => {
    const getWonder = async () => {
      let response = await axios.get(`http://localhost:3001/wonders/${id}`)

      setWonder(response.data) 
      setReviews(response.data.reviews)
    } 
    getWonder()
  }, [reviews, id])


  const handleDelete = async (event) => {
    event.preventDefault()
    let response = await axios.delete(`http://localhost:3001/wonders/${id}`)
    setWonder(response)

    
  } 
  const handleUpdate = async (event) => {
    event.preventDefault()
    let response = await axios.put(`http://localhost:3001/wonders/${id}`, formState)
    setWonder([wonder, response])
    setFormState({ location: '', description: '', img: ''})
  }
 
  

  return (
    <div>
      <div>
        <h1>{wonder.location}</h1>
        <img src={wonder.img} alt='Wonder'/>
      </div>
      <div>
        <h2>Description</h2>
        <p>{wonder.description}</p>
      </div>
      <div className='reviews'>
        <h3 className='reviewHeader'>Reviews</h3>
        {reviews ? reviews.map((review) => (
          <div key={review.id}>
            
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
        <input id='entry' value={formState.entry} onChange={handleChange}/>
        <button type='submit'>Submit</button>
      </form>
      </div>
      <div className='updateForm'>
      <form onSubmit={handleUpdate}>
        <label htmlFor='title'>Title:</label>
        <input id='title' value={formState.title} onChange={handleChange} />
        <label htmlFor='entry'>Entry:</label>
        <input id='entry' value={formState.entry} onChange={handleChange}/>
        <button type='submit'>Submit</button>
      </form>
      </div>
      <div>
      <button className="deleteButton" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default WonderDetails
