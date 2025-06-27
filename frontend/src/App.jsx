import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)

  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/profiles/api/hobbies/')  // Express API endpoint
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <>
      <h1>{message}</h1>
    </>
  )
}

export default App