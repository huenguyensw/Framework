import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hero from './Components/Exercise02/Hero'
import Portfolio from './Components/Exercise02/Portfolio'
import About from './Components/Exercise02/About'
import Contact from './Components/Exercise02/Contact'
import Header from './Components/Exercise01/Header'
import Sidebar from './Components/Exercise01/Sidebar'
import Main from './Components/Exercise01/Main'
import Footer from './Components/Exercise01/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* Exercise 1 */}
      <Header/>
      <Sidebar/>
      <Main/>
      <Footer/>

      {/* Exercise 2 */}
      {/* <Hero />
      <Portfolio />
      <About />
      <Contact /> */}
    </div>
  )
}

export default App
