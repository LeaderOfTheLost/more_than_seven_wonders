import { Link } from 'react-router-dom'
import Listings from './Listings'


const Nav = () => {
  return(
    <nav className="navbar">
      <h4>More Than Seven Wonders</h4>
      <div>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/listings'>View Wonders</Link>
        <Link to='/newWonder'>Add Wonder</Link>
      </div>
    </nav>
  )
}

export default Nav