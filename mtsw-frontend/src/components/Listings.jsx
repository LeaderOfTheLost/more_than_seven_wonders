import {useNavigate, Link} from 'react-router-dom'

const Wonders = (props) => {

  let navigate = useNavigate()

  const showWonder = (wonder) => {
    navigate(`${wonder._id}`)
  }

  return(
    <>
    <div>
      <button><Link to='/'>Back</Link></button>
    </div>
    <div className="wonders-grid">
    {
      props.wonders.map((wonder) => (
        <div className="wonder-card" onClick={() => showWonder(wonder)} key={props.wonder}>
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