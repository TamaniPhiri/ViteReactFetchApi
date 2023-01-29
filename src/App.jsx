import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import './App.css';

const App = () => {

  
const[data, setData]=useState([]);

useEffect(()=>{
  getData();
},[])

const getData=async()=>{
  await fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response =>response.json())
      .then(json => setData(json));
}


  return (
    <div>
      {data.map((results)=>{
        return  <div key={results.id} class="container">
                  <div>
                    <img src={results.url} alt="img" /><br />
                    <p>{results.title}</p>
                    <a href='#'>{results.thumbnailUrl}</a>
                  </div>    
                </div>
      })}
    </div> 
  )
}

export default App