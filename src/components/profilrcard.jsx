import React from "react";
import './Profilecard.css';

function Personalprofile(props) {
    const {name, age, occupation, location} = props

    return (
        <div className="profile-box">
            <p>Hello, {name}!</p>
            <p>Age: {age}</p>
            <p>Occupation: {occupation}</p>
            <p>Location: {location}</p>
        </div>
    );
}

export default Personalprofile;
