import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const WonderDetails = (props) => {

  const [reviews, updateReviews] = useState([])
  const [wonder, setWonder] = useState({})
  const [review, setReview] = useState({})
  const [formState, setFormState] = useState({ title: '', entry: ''})
  let {id} = useParams()

  useEffect(() => {
    const getWonder = async () => {
      let response = await axios.get(`http://localhost:3001/wonders/${id}`)

      setWonder(response.data) 
    } 
    getWonder()
  }, [props.wonders, id])

  useEffect(() => {
    const getReview = async () => {
      let response = await axios.get(`http://localhost:3001/reviews/${id}`)

      console.log(response) 
    } 
    getReview()
  }, [props.reviews, id])

  

  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    let newReview = await axios.post('http://localhost:3001/reviews', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })

      updateReviews([...reviews, newReview.data])
      setFormState({ title: '', entry: ''})
      props.toggleNewReviewAdded(!props.newReviewAdded)
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
        {props.wonders.map((review) => (
          <div key={review._id}>
            {/* <h4>{review.title}</h4> */}
          </div>
        ))}
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
    </div>
  )
  console.log(review)
}

export default WonderDetails
