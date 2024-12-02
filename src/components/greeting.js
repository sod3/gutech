import React from "react";

function Greeting(props) {
    const {naam, age, weight} = props

    return(
        <div>
            <h1>Hello, {naam} Welcome to React!</h1>
            <p>your are {age} years old</p>
            <p>Your weight is {weight}kg</p>
        </div>
    )

}

export default Greeting