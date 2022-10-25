import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const WonderDetails = (props) => {

  

  const [wonder, setWonder] = useState('')
  let {id} = useParams()

  useEffect(() => {
    let selectedWonder = props.wonders.find(
      (wonder) => wonder._id === parseInt(id)
      )
      
    setWonder(selectedWonder)
  }, [props.wonders, id])

  return wonder ? (
    <div className="detail">
      <div className="detail-header">
      <Link to='/listings'>Back</Link>
        <img src={wonder.img} alt={wonder.location} />
        <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h1>{wonder.location}</h1>
        </div> 
      </div>
      <div className="info-wrapper">
        <p>{wonder.description}</p>
      </div>
      
    </div>
  ) : null
}

export default WonderDetails
