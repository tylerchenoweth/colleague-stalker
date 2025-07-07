
import {useState} from 'react';
import {Outlet, Link} from 'react-router-dom';
import { useLocation } from "react-router-dom";

import FormField from '../../components/FormField/FormField';

import './EditColleague.css'

// const response = await fetch(`http://localhost:8000/profiles/api/coleagues/${id}/`, {
//     method: "PUT",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//         // your updated fields go here
//         first_name: "UpdatedName",
//         last_name: "UpdatedLastName",
//         job_title: "UpdatedJob"
//     }),
// });




function EditColleague() {

    const location = useLocation();
    const { colleague } = location.state || {};


    return (
        <div>
            <h1>Edit Data</h1>
            <h2>{colleague.id}</h2>

            <form>
                <FormField 
                    fieldValue={colleague.first_name} 
                    fieldName="first_name"
                    onChangeHandler={setName(e.target.value)}
                />
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