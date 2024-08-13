import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EkiliRelay from 'ekilirelay'

function App() {
  const [count, setCount] = useState(0)
  const sdk = new EkiliRelay()

  const send = ()=>{
    setCount((count) => count + 1)
    // Send an email
    sdk.sendEmail('tacherasasi@gmail.com', 'Test Subject', 'This is a test message.', 'From: Work <support@ekilie.com>')
    .then(response => {
      if (response.status === 'success') {
        console.log('Email sent successfully.');
      } else {
        console.log('Failed to send email: ' + response.message);
        console.log(response);
      }
    })
    .catch(error => {
      console.log('Error:', error);
    });
    console.log("clicked")
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => send()}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
