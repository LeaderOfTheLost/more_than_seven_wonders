import {useNavigate} from 'react-router-dom'
import { useState } from 'react'


const Wonders = (props) => {

  const [wonders, setWonders] = useState([])
  const [newWonder, setNewWonder] = useState({
    location: '', description: '', img: ''
  })

  let navigate = useNavigate()

  const showWonder = (wonder) => {
    navigate(`${wonder._id}`)
  }

  return(
    <>
    <div className="wonders-grid">
    {
      props.wonders.map((wonder) => (
        <div className="wonder-card" onClick={() => showWonder(wonder)} key={props.wonders.id}>
          <img style={{ display: 'block' }} src={wonder.img} alt={wonder.location} />
          <h3>{wonder.location}</h3>
        </div>
      ))
    }
      </div>
      </>
  )
}

export default Wonders