import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import AppStyles from './components/App';

import { BASE_URL, API_KEY } from './constants/index'

import Overall from './components/Overall';

function App() {

  const [ overall, setOverall ] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`)
      .then(response => {
        setOverall(response.data['sol_keys']);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  return (
    <AppStyles>
      {
        overall.map(overalls => {
          return (
          <Overall key = {overalls} info = {overalls} />
          );
        })
      }
    </AppStyles>
  );
}

export default App;
