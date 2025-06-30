
import './EditButton.css'

function EditButton() {


    function handleClick() {
        console.log("edit clicked")
    }

    return (
     
            <button 
            className="editButton"
            type="button"
            onClick={handleClick}
            >
                Edit
            </button>
        
    )
}

export default EditButton;