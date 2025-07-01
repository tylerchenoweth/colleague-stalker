// import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// 
// import './App.css'
// 
// import axios from 'axios';



import {useEffect, useState} from 'react';

import {Outlet, Link} from 'react-router-dom';

import EditButton from '../../components/EditButton/EditButton';
import DeleteButton from '../../components/DeleteButton/DeleteButton';

import './ColleagueList.css';

function ColleagueList() {

    const [colleagues, setColleagues] = useState([]);

    const fetchColleagues = () => {
        fetch('http://localhost:8000/profiles/api/coleagues/')  // Express API endpoint
        .then(res => res.json())
        .then(data => setColleagues(data));
    }

    useEffect(() => {
         fetchColleagues();
    }, []);

    return (
        
        <div>
            <h1>Da List</h1>
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
                    <EditButton />
                    <DeleteButton id={colleague.id} onDelete={fetchColleagues} />
                </div>
            ))}
        </div>
    )

}


export default ColleagueList;