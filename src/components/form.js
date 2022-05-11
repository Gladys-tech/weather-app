import React from 'react';

const Form = (props) =>{
    return(
        <form className='form' onSubmit = {props.loadWeather}>
            <input type= "text" name ="city" placeholder='choose a city'/>
            <input type = "text" name = "country" placeholder = "choose a country"/>
            <button>Get the Weather</button>
        </form>
    )
}

export default Form;