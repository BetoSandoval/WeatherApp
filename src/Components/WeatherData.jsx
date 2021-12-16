import React from 'react';
import '../assets/styles/weatherData.scss';


export const WeatherData = () => {
    return (
        <div>
            <img src="../assets/img/HeavyCloud.png" alt="Cloud"/>
            <p className='temperature'>15 <span>°C</span></p>
            <p className='climate'>Clima</p>
            <p className='date'>Today . Fri, 5 Jun</p>
            <p className='city'>city</p>
        </div>
    )
}
