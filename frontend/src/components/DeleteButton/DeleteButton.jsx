
import './DeleteButton.css'

function DeleteButton({id, onDelete}) {

    const handleDelete = async () => {
        if(confirm("Are you sure you want to delete permanently?") === true) {
            const response = await fetch(`http://localhost:8000/profiles/api/coleagues/${id}/`, {
                method: "DELETE"
            });

            if(response.ok) {
                onDelete();
            } else {
                console.error("Failed to delete item...");
            }
        } else {
            console.log("Cancelled deletion...")
        }
    }

    return (
        <button 
        className="deleteButton"
        type="button"
        onClick={handleDelete}>
            Delete
        </button>

    )
}

export default DeleteButton;