import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const WonderDetails = (props) => {

  const [wonder, setWonder] = useState({})
  let {id} = useParams()

  useEffect(() => {
    const getWonder = async () => {
      let response = await axios.get(`http://localhost:3001/wonders/${id}`)

      setWonder(response.data) 
    } 
    getWonder()
  }, [props.wonders, id])

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
}

export default WonderDetails
