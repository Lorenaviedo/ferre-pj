import React from "react";


function Address({ address, onDelete }) {

    return (
        <div className="address-container">
            <p className="address-street">{address.street}</p>
            <p className="address-city">{address.city}</p>
            <p className="address-department">{address.department}</p>
            <p className="address-postal-code">{address.postal_code}</p>
            <p className="address-additional-info">{address.additional_info}</p>
            <button className="delete-button" onClick={() => onDelete(address.id)}>
                Delete
            </button>
        </div>
    );
}

export default Address;