import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hero from './Components/Exercise02/Hero'
import Portfolio from './Components/Exercise02/Portfolio'
import About from './Components/Exercise02/About'
import Contact from './Components/Exercise02/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </div>
  )
}

export default App
