import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TasksManagement from './components/TasksManagement'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TasksManagement/>
    </div>
  )
}

export default App
