
import {useState} from 'react';
import {Outlet, Link} from 'react-router-dom';
import { useLocation } from "react-router-dom";

import './EditColleague.css'

function EditColleague() {

    const location = useLocation();
    const { colleague } = location.state || {};


    return (
        <div>
            <h1>Edit Data</h1>
            <h2>{colleague.id}</h2>

            <form>
                <label>
                    
                    First Name: <input 
                        value={colleague.first_name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <br></br>
                    Last Name: <input 
                        value={colleague.last_name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <br></br>
                    Current Company: <input 
                        value={colleague.current_company} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <br></br>
                    Shared Company: <input 
                        value={colleague.shared_company} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <br></br>
                    Phone: <input 
                        value={colleague.phone} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <br></br>
                    Email: <input 
                        value={colleague.email} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <br></br>
                    Hobbies: <input 
                        value={colleague.hobbies} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <br></br>
                    Last Contact: <input 
                        value={colleague.last_contact} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <br></br>
                    Start Date: <input 
                        value={colleague.start_date_worked} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <br></br>
                    End Date: <input 
                        value={colleague.end_date_worked} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </label>

                <input type="submit" value="Submit" />
            </form>

            <Link to="/">Back to List</Link>
        </div>
    )
}

export default EditColleague;