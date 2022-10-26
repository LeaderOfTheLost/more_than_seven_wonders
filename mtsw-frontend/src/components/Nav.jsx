import { Link } from 'react-router-dom'
import Listings from './Listings'


const Nav = () => {
  return(
    <header>
      <nav className="navbar">
        <h4>More Than Seven Wonders</h4>
        <div className='links'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav