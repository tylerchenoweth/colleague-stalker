
import './DeleteButton.css'

function DeleteButton(id) {

    function handleClick() {
        console.log("Deleting: ", id['id']);

        // fetch('http://localhost:8000/profiles/api/coleagues/')  // Express API endpoint
        // .then(res => res.json())
        // .then(data => setColleagues(data));
    }

    return (
        <button 
        className="deleteButton"
        type="button"
        onClick={() => handleClick()}>
            Delete
        </button>

    )
}

export default DeleteButton;