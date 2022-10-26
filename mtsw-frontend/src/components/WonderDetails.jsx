import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const WonderDetails = (props) => {

  const [wonder, setWonder] = useState('')
  let {id} = useParams()

  useEffect(() => {
    const wonderId = async () => {
      let response = await axios.get(`http://localhost:3001/listings/${id}`)
      setWonder(response.data.wonderId)
    }
    wonderId()
  }, [props.wonders, id])

  return wonder ? (
    <div>
      <div>
        <h1>{wonder.location}</h1>
        <img src={wonder.img}/>
      </div>
      <div>
        <h3>Description</h3>
        <p>{wonder.description}</p>
      </div>
      <div>
        <h4>Want to add your own review? Fill out the form below!</h4>
      </div>
    </div>
) : null;
}

export default WonderDetails
