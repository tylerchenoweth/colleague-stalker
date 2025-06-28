import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import axios from 'axios';

function App() {

  const [colleagues, setColleagues] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/profiles/api/coleagues/')  // Express API endpoint
      .then(res => res.json())
      .then(data => setColleagues(data)); 
  }, []);

  return (
    
    <div>
      {colleagues.map(colleague => (
        <div className="colleagueRow" key={colleague.id}>
          <p>
            {colleague.first_name}
          </p>
          <p>&nbsp;</p>
          <p>
            {colleague.last_name}
          </p>
          
          
        </div>
      ))}
    </div>


    
  )
}

export default App