import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const WonderDetails = (props) => {

  const [wonder, setWonder] = useState('')
  let {id} = useParams()

  useEffect(() => {
    const wonderID = async () => {
      let response = await axios.get(`http://localhost:3001/wonders/${id}`)
      setWonder(response.data.wonderId) 
    } 
    wonderID()
  }, [props.wonders, id])

  return wonder ? (
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
    </div>
) : null;
}

export default WonderDetails
