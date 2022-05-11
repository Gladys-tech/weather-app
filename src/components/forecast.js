import React from 'react';
import moment from 'moment';

const Forecast = (props) =>{
    return(
        <div className='forecast'>
            {props.country && props.city && <p>location: {props.city},{props.country}</p>}
            {props.temperature && <p>Temperature: <b><span>{Math.round(5+(props.temperature-32)*0.55)}&deg;C</span></b></p>}
            {props.icon && <img src={`https://openweathermap.org/img/w/${props.icon}.png`} alt="weather icon"/>}
            {props.description && <p>condition: <b>{props.description}</b></p>}
            <div className='box'>

            <div className='humidity'>
            {props.humidity && <p>Humidiy: <b>{props.humidity}% </b></p>}
            {props.pressure && <p>pressure: <b>{props.pressure} </b></p>}
            </div>
            {props.error && <p> {props.error}</p>}
            <div className='date'>
            <p>Day: <b>{moment().format('dddd')}</b></p>
            <p>Date: <b>{moment().format('LL')}</b></p>
            </div>
            </div>
            
            
        </div>
    )
}

export default Forecast;