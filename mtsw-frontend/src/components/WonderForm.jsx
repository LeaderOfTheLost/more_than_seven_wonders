import { useNavigate } from "react-router-dom";
import axios from "axios";


const WonderForm = (props) => {
  let navigate = useNavigate()
    
    const handleSubmit = (e) => {
      props.addWonder(e)
      navigate('/listings')
    }
  
    const newWonder = props.newWonder

    return(
      <div>
        <h1>Add A New Wonder To The List</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='location'>Location: </label>
            <input id='location' value={newWonder.location} onChange={props.handleChange}/>
            <label htmlFor='description'>Description: </label>
            <input id='description' value={newWonder.description} onChange={props.handleChange}/>
            <label htmlFor='img'>Image URL: </label>
            <input id='img' value={newWonder.img} onChange={props.handleChange}/>
            <button type='submit'>Add Wonder</button>
          </form>
      </div>
    )
  }

  export default WonderForm