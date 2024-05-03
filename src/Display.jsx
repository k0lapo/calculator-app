import React from 'react';

const Display = ({ value }) => {
    let formattedValue = ' ';
    

    // Convert value to a number if it's not already
    const numericValue = Number(value);

    if (!isNaN(numericValue)) {
        if (numericValue <= 999999999) {
            // Format the value with commas
            formattedValue = numericValue.toLocaleString();
        } else {
            // Truncate the value and add an ellipsis
            formattedValue = numericValue.toString().substring(0, 11) + " ";
        }
    }

    return (
        <div className="display">
            <input type="text" value={formattedValue}readOnly />
        
        </div>
    );
};

export default Display;
