// import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// 
// import './App.css'
// 
// import axios from 'axios';



import {useEffect, useState} from 'react';

import {Outlet, Link} from 'react-router-dom';

import './ColleagueList.css';

function ColleagueList() {

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
                <Link to="/details" state={{id: colleague.id}}>Details</Link>
                <p>{colleague.id}</p>
                <p>
                    {colleague.first_name}
                </p>
                <p>&nbsp;</p>
                <p>
                    {colleague.last_name}
                </p>
                <p>---</p>
                <p>
                    {colleague.current_company}
                </p>
            </div>
        ))}
        </div>
    )

}


export default ColleagueList;