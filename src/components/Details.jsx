import React, { useState, useEffect } from 'react';
import { BASE_URL, API_KEY } from '../constants/index';
import axios from 'axios';

export default function Details(props) {

    const { airtemp, detailsId, close, info } = props;
    const [ windSpeed, setWindSpeed ] = useState([])
    const [ pressure, setPressure ] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}${API_KEY}`)
            .then(response => {
                setWindSpeed(response.data[`${props.info}`].HWS);
                setPressure(response.data[`${props.info}`].PRE);
            })
            .catch(error => {
                console.log(error);
            });
    }, [detailsId]);

    return (
        <div>
            <p>Temp {props.airtemp.av}</p>
            <p>Wind Speed {windSpeed.av}</p>
            <p>Air Pressure {pressure.av}</p>
            <button onClick = {close}>close</button>
        </div>
    );
}