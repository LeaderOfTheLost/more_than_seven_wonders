import { Link } from 'react-router-dom'


const Nav = () => {
  return(
    <header>
      <nav className="navbar">
        <h4 className='navHeader'>More Than Seven Wonders</h4>
        <div className='links'>
          <Link to='/'className='link'>Home</Link>
          <Link to='/about' className='link'>About Us</Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav