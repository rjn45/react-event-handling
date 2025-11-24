import React from "react";

function BasicEvents(){

    const handleClick = () => {
        alert('Button was clicked!');
    };

    const handleMouseEnter =() =>{
        console.log('Mouse entered the button');
    }

    const handleMouseLeave = () => {
        console.log('mouse left the button')
    }

    const handleInputChange = (event) => {
        console.log('Input value: ', event.target.value);
    }


    return(
        <div>
            <h2>multiple event types</h2>
            <button onClick={handleClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                        Hover and Click me!</button>

            <br/>

            <input 
            type="text"
            onChange={handleInputChange}
            placeholder="Type something and watch the console.."/>

        </div>
    );
}

export default BasicEvents;