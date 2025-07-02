
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
                    Name:
                    <input 
                        value={colleague.first_name} 
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