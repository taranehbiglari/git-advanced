import { useState } from 'react'
import './App.css'
import InfoBox from './components/InfoBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

      </div>
      <InfoBox></InfoBox>
      <h1>advanced git</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
       this is test branch
      </p>
    </>
  )
}

export default App
