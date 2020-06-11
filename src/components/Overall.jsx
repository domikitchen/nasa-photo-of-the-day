import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { BASE_URL, API_KEY } from '../constants/index'

import Details from './Details'

export default function Overall(props) {
    const [ currentAirTemp, setcurrentAirTemp ] = useState([]);
    const [ currentDetails, setCurrentDetails ] = useState(null);

    const openDetails = id => {
        setCurrentDetails(id);
    }
    const closeDetails = () => {
        setCurrentDetails(null);
    }

    const { info } = props;

    useEffect(() => {
        axios.get(`${BASE_URL}${API_KEY}`)
            .then(response => {
                setcurrentAirTemp(response.data[`${props.info}`].AT);
                console.log(response.data[`${info}`]);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h2>Sol {props.info}</h2>
            <h4>High {currentAirTemp.mx}° C</h4>
            <h4>Low {currentAirTemp.mn}° C</h4>
            <button onClick = {() => openDetails(info)}>more</button>
            {
            currentDetails &&  <Details airtemp = {currentAirTemp} detailsId = {currentDetails} close = {closeDetails} info = {props.info} />
            }
        </div>
    )
}