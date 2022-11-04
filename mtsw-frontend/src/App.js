import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import WonderDetails from './components/WonderDetails'

function App() {
  return (
    <div className="App">
      <header className="navbarHead">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/wonders/:id" element={<WonderDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
