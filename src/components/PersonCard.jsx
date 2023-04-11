import React, { useState } from 'react';

const PersonCard = (props) => {
    const [ currentAge, setCurrentAge ] = useState(props.currentAge);
    return (
        <div>
            <h2>{props.lastName}, { props.firstName}</h2>
            <p>Age: {currentAge} </p>
            <p>Hair Color: {props.hair} </p>
            <button onClick = { (event) => setCurrentAge(currentAge +1)}>Birthday Button for {props.firstName}</button>
        </div>
    )
}

export default PersonCard;