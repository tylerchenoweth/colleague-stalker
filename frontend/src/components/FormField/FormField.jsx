
import "./FormField.css";


function FormField(fieldValue, fieldName, onChangeHandler) {
    return (
        <div className="form-field">
            <label htmlFor={fieldName}>{fieldName.replace(/_/g, ' ').toUpperCase()}:</label>
            <input
                type="text"
                id={fieldName}
                name={fieldName}
                value={fieldValue}
                onChange={(e) => onChangeHandler(e.target.value)}
            />
        </div>
    );

}

export default FormField;