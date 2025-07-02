import {Outlet, Link} from 'react-router-dom';

import './EditButton.css'

function EditButton({colleague}) {


    function handleClick() {
        console.log("edit clicked")
    }

    return (
     
            
        <Link 
            to="/edit" 
            state={{ colleague }}
            className="buttonLink"
        >
            <button 
                className="editButton"
                type="button"
                onClick={handleClick}
            >
                Edit
                
            </button>
        </Link>
        
    )
}

export default EditButton;