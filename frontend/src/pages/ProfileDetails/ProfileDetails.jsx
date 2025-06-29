// import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// 
// import './App.css'
// 
import axios from 'axios';

import "./ProfileDetails.css";

import {useEffect, useState} from 'react';
import {Outlet, Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

function ProfileDetails() {

    // below gets the id of the colleague
    const location = useLocation();
    const {id} = location.state || {};

    const [colleagues, setColleagues] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8000/profiles/api/coleagues/${id}/`)  // Express API endpoint
        .then(res => res.json())
        .then(data => setColleagues(data)); 
    }, []);


    const [colleagueHobbies, setHobbies] = useState([]);

    useEffect(() => {  
        if (!colleagues.hobbies) return;
        fetch(`http://localhost:8000/profiles/api/hobbies/`)  // Express API endpoint
        .then(res => res.json())
        .then(allHobbies => {

            const selectHobbies = allHobbies.filter(h =>
                colleagues.hobbies.includes(h.id)
            )   
            
            console.log(">>>", colleagues.hobbies)
            
            setHobbies(selectHobbies)
        }); 
    }, [colleagues]);

    

    return (
        
        <div> 
            <h3>{colleagues.id}</h3>
            <img src={colleagues.photo} className="profilePicture"></img>

            <h3>Name: {colleagues.first_name} {colleagues.last_name}</h3>
            <h4>Last Contacted: </h4>
            <p>{colleagues.last_contact}</p>
            

            <h4>Hobbies & Interests:</h4>
            {colleagueHobbies.length === 0 ? 
            
            <p>Nadia doesnt have any cool hobbies!</p> : 
            
            <ul>
                {colleagueHobbies.map((hobby, index) => (
                    <li key={index}>{hobby.name}</li>
                ))}
            </ul>
            }

            

            <Link to="/">Back to List</Link>
        </div>
    )

}


export default ProfileDetails;